package com.example.calender.repo;

import com.example.calender.dto.RewardDto;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RewardRepo extends JpaRepository<RewardDto, Long> {
}
