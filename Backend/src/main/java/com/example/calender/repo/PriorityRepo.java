package com.example.calender.repo;

import com.example.calender.model.Priority;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PriorityRepo extends JpaRepository<Priority, Long> {
}
