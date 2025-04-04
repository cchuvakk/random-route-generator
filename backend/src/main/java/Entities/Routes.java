package Entities;

import java.util.Date;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "Routes")
public class Routes {

    @Id
    @GeneratedValue
    (
        strategy = GenerationType.IDENTITY
    )
    private int id;

    @OneToMany
    (
        cascade = CascadeType.ALL
    )
    @JoinColumn
    (
        name = "userid",
        referencedColumnName = "id"
    )
    private Users user;

    @Column
    (
        name = "latitude",
        nullable = false 
    )
    private double latitude;

    @Column
    (
        name = "longitude",
        nullable = false
    )
    private double longitude;

    @Column
    (
        name = "address",
        nullable = true
    )
    private String address;

    @Column
    (
        name = "route_completed",
        columnDefinition = "boolean default 'false'"
    )
    private boolean route_completed;

    @Column
    (
        name = "created_at",
        columnDefinition = "timestamp default 'now()'"
    )
    private Date created_at;

    public Routes(int id, Users user, double latitude, double longitude, String address, boolean route_completed, Date created_at)
    {
        this.id = id;
        this.user = user;
        this.latitude = latitude;
        this.longitude = longitude;
        this.address = address;
        this.route_completed = route_completed;
        this.created_at = created_at;
    }

    public int getRouteId()
    {
        return id;
    }

    public void setRouteId(int id)
    {
        this.id = id;
    }

    public Users getRouteUser()
    {
        return user;
    }

    public void setRouteUser(Users user)
    {
        this.user = user;
    }

    public double getLatitude()
    {
        return latitude;
    }

    public void setLatitude(double latitude)
    {
        this.latitude = latitude;
    }

    public double getLongitude()
    {
        return longitude;
    }

    public void setLongitude(double longitude)
    {
        this.longitude = longitude;
    }

    public String getAddress()
    {
        return address;
    }

    public void setAddress(String address)
    {
        this.address = address;
    }

    public boolean getRouteCompleted()
    {
        return route_completed;
    }

    public void setRouteCompleted(boolean route_completed)
    {
        this.route_completed = route_completed;
    }

    public Date getCreatedAt()
    {
        return created_at;
    }

    public void setCreatedAt(Date created_at)
    {
        this.created_at = created_at;
    }
}
