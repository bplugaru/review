import { Injectable } from '@nestjs/common';
import { CreateReviewDto } from './dto/create-review.dto';

import { Review } from './entities/review.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ReviewsService {
  constructor(
    @InjectRepository(Review)
    private reviewRepository: Repository<Review>,
  ) {}
  create(createReviewDto: CreateReviewDto) {
    return this.reviewRepository.save(createReviewDto);
  }

  findAll() {
    return this.reviewRepository.find({
      order: {
        createdAt: 'DESC',
      },
    });
  }
}
