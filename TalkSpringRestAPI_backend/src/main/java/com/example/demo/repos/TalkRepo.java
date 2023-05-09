package com.example.demo.repos;

import com.example.demo.models.Talk;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TalkRepo extends JpaRepository<Talk, Integer>
{
    //List<Talk> findByVenue(String venue);
}
