import { Training, TrainingFilter } from '@/types/training';

/**
 * Service for interacting with the training API
 */
export const trainingService = {
  /**
   * Get all training courses
   */
  async getAllTrainings(lang: string = 'en'): Promise<Training[]> {
    try {
      const response = await fetch(`/api/training?lang=${lang}`);
      
      if (response.ok) {
        const trainings = await response.json();
        if (Array.isArray(trainings)) {
          return trainings;
        }
      }
      
      throw new Error('Failed to fetch training courses');
    } catch (error) {
      console.error('Error fetching training courses:', error);
      throw error;
    }
  },
  
  /**
   * Get a single training course by slug
   */
  async getTrainingBySlug(slug: string): Promise<Training> {
    try {
      const response = await fetch(`/api/training?slug=${slug}`);
      
      if (response.ok) {
        const training = await response.json();
        if (training && !training.error) {
          return training;
        }
      }
      
      throw new Error('Training course not found');
    } catch (error) {
      console.error(`Error fetching training course with slug ${slug}:`, error);
      throw error;
    }
  },
  
  /**
   * Create a new training course
   */
  async createTraining(training: Partial<Training>): Promise<Training> {
    try {
      const response = await fetch('/api/training', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(training),
      });
      
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Failed to create training course');
      }
      
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error creating training course:', error);
      throw error;
    }
  },
  
  /**
   * Update an existing training course
   */
  async updateTraining(slug: string, training: Partial<Training>): Promise<Training> {
    try {
      const response = await fetch(`/api/training?slug=${slug}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(training),
      });
      
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Failed to update training course');
      }
      
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(`Error updating training course with slug ${slug}:`, error);
      throw error;
    }
  },
  
  /**
   * Delete a training course
   */
  async deleteTraining(slug: string): Promise<void> {
    try {
      const response = await fetch(`/api/training?slug=${slug}`, {
        method: 'DELETE',
      });
      
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Failed to delete training course');
      }
    } catch (error) {
      console.error(`Error deleting training course with slug ${slug}:`, error);
      throw error;
    }
  },

  /**
   * Get training categories
   */
  async getCategories(): Promise<any[]> {
    try {
      const response = await fetch('/api/training/categories');
      
      if (response.ok) {
        const categories = await response.json();
        if (Array.isArray(categories)) {
          return categories;
        }
      }
      
      throw new Error('Failed to fetch training categories');
    } catch (error) {
      console.error('Error fetching training categories:', error);
      throw error;
    }
  },

  /**
   * Filter training courses based on criteria
   */
  async filterTrainings(filters: TrainingFilter): Promise<Training[]> {
    try {
      const response = await fetch('/api/training/filter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(filters),
      });
      
      if (response.ok) {
        const trainings = await response.json();
        if (Array.isArray(trainings)) {
          return trainings;
        }
      }
      
      throw new Error('Failed to filter training courses');
    } catch (error) {
      console.error('Error filtering training courses:', error);
      throw error;
    }
  },

  /**
   * Search training courses
   */
  async searchTrainings(query: string): Promise<Training[]> {
    return this.filterTrainings({ search: query });
  },

  /**
   * Get training courses by category
   */
  async getTrainingsByCategory(category: string): Promise<Training[]> {
    return this.filterTrainings({ category: category as any });
  },

  /**
   * Get training courses by difficulty level
   */
  async getTrainingsByDifficulty(difficulty: string): Promise<Training[]> {
    return this.filterTrainings({ difficulty: difficulty as any });
  }
};

export default trainingService;
