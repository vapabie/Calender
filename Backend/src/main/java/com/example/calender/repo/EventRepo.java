package com.example.calender.repo;


import com.example.calender.model.Event;
import com.example.calender.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDate;
import java.util.List;


public interface EventRepo extends JpaRepository<Event, Long> {
    @Query("SELECT e FROM Event e WHERE e.userID = :user AND :date BETWEEN FUNCTION('DATE', e.startDate) AND FUNCTION('DATE', e.endDate)")
    List<Event> findEventsByUserAndDate(@Param("user") User user, @Param("date") LocalDate date);

}
