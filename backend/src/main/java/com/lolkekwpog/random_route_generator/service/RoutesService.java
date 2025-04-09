package com.lolkekwpog.random_route_generator.service;

import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.lolkekwpog.random_route_generator.entities.Routes;
import com.lolkekwpog.random_route_generator.entities.Users;
import com.lolkekwpog.random_route_generator.repository.RoutesRepository;
import com.lolkekwpog.random_route_generator.repository.UsersRepository;

@Service
public class RoutesService {
    private String openRoutesServiceURL = "https://api.openrouteservice.org/pois";
    private String openRoutesServiceAPIKEY = System.getenv("OPEN_ROUTES_API_KEY");

    @Autowired
    private RoutesRepository routesRepository;

    @Autowired
    private UsersRepository usersRepository;

    private final RestTemplate restTemplate = new RestTemplate();

    public RoutesService(RoutesRepository routesRepository)
    {
        this.routesRepository = routesRepository;
    }

    public List<Routes> getAllUserRoutes(int id)
    {
        return routesRepository.findUserById(id);
    }

    public Routes pickRandomRoute(int id)
    {
        Users user = usersRepository.findById(id).orElseThrow(() -> new RuntimeException("User not found"));

        double lon = 8.8034;
        double lat = 53.0756;

        double bboxLon = lon * 1.00075;
        double bboxLat = lat * 1.00075;

        Map<String, Object> requestBody = Map.of(
            "request", "pois",
            "geometry", Map.of(
                "bbox", List.of(List.of(lon, lat), List.of(bboxLon, bboxLat)),
                "geojson", Map.of(
                    "type", "Point",
                    "coordinates", List.of(lon, lat)
                ),
                "buffer", 200
            )
        );

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.set("Authorization", openRoutesServiceAPIKEY);

        HttpEntity<Map<String, Object>> request = new HttpEntity<>(requestBody, headers);

        ResponseEntity<Map> response = restTemplate.postForEntity(openRoutesServiceURL, request, Map.class);
        List<Map<String, Object>> features = (List<Map<String, Object>>) response.getBody().get("features");

        if (features == null || features.isEmpty()) {
            throw new RuntimeException("No POIs found");
        }

        //thx indus man
        Map<String, Object> randomFeature = features.get(new Random().nextInt(features.size()));
        Map<String, Object> geometry = (Map<String, Object>) randomFeature.get("geometry");
        List<Double> coordinates = (List<Double>) geometry.get("coordinates");

        Map<String, Object> properties = (Map<String, Object>) randomFeature.get("properties");
        Map<String, String> tags = (Map<String, String>) properties.get("osm_tags");
        String address = tags != null && tags.containsKey("name") ? tags.get("name") : null;

        Routes route = new Routes();
        route.setRouteUser(user);
        route.setLatitude(coordinates.get(1));
        route.setLongitude(coordinates.get(0));
        route.setAddress(address);
        route.setRouteCompleted(false);
        route.setCreatedAt(new Date());

        return routesRepository.save(route);
    }
}
