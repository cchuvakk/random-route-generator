package Entities;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "UserStats")
public class UserStats {
    @Id
    @GeneratedValue
    (
        strategy = GenerationType.IDENTITY
    )
    private int id;

    @OneToOne
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
        name = "completed_routes",
        columnDefinition = "integer default '0'"
    )
    private int completed_routes;

    @Column
    (
        name = "completion_streak",
        columnDefinition = "integer default '0'"
    )
    private int completion_streak;

    @Column
    (
        name = "skipped_routes",
        columnDefinition = "integer default '0'"
    )
    private int skipped_routes;

    @Column
    (
        name = "distance_traveled",
        columnDefinition = "double precision default '0'"
    )
    private double distance_traveled;

    public UserStats(int id, Users user, int completed_routes, int completion_streak, int skipped_routes, double distance_traveled)
    {
        this.id = id;
        this.user = user;
        this.completed_routes = completed_routes;
        this.completion_streak = completion_streak;
        this.skipped_routes = skipped_routes;
        this.distance_traveled = distance_traveled;
    }

    public int getUserStatsId()
    {
        return id;
    }

    public void setUserStatsId(int id)
    {
        this.id = id;
    }

    public Users getUserStatsUser()
    {
        return user;
    }

    public void setUserStatsUser(Users user)
    {
        this.user = user;
    }

    public int getCompletedRoutes()
    {
        return completed_routes;
    }

    public void setCompletedRoutes(int completed_routes)
    {
        this.completed_routes = completed_routes;
    }

    public int getCompletionStreak()
    {
        return completion_streak;
    }

    public void setCompletionStreak(int completion_streak)
    {
        this.completion_streak = completion_streak;
    }

    public int getSkippedRoutes()
    {
        return skipped_routes;
    }

    public void setSkippedRoutes(int skipped_routes)
    {
        this.skipped_routes = skipped_routes;
    }

    public double getDistanceTraveled()
    {
        return distance_traveled;
    }

    public void setDistanceTraveled(double distance_traveled)
    {
        this.distance_traveled = distance_traveled;
    }
}
