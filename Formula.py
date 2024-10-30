from dataclasses import dataclass
from typing import Dict, List
import math

@dataclass
class Activity:
    name: str
    category: str
    hours: float
    role_level: int  # 1: Participant, 2: Coordinator, 3: Leader
    impact_score: float  # 0-10 scale measuring impact/achievement

class ExtracurricularGradingSystem:
    def _init_(self):
        # Base weights for each category (out of 100)
        self.category_weights = {
            "Leadership": 30,
            "Career": 25,
            "External Relations": 20,
            "Social": 10,
            "Cultural": 8,
            "Sports": 7
        }
        
        # Role level multipliers
        self.role_multipliers = {
            1: 1.0,    # Participant
            2: 1.5,    # Coordinator
            3: 2.0     # Leader
        }
        
        # Maximum recommended hours per category per semester
        self.max_hours = {
            "Leadership": 100,
            "Career": 80,
            "External Relations": 80,
            "Social": 60,
            "Cultural": 60,
            "Sports": 60
        }

    def calculate_activity_score(self, activity: Activity) -> float:
        # Get base weight for category
        base_weight = self.category_weights[activity.category]
        
        # Calculate diminishing returns factor for hours
        max_hours = self.max_hours[activity.category]
        hours_factor = 1.0 - math.exp(-3 * activity.hours / max_hours)
        
        # Get role multiplier
        role_multiplier = self.role_multipliers[activity.role_level]
        
        # Calculate impact factor (normalized to 0-1)
        impact_factor = activity.impact_score / 10.0
        
        # Combined score formula:
        # Base weight × Hours factor × Role multiplier × Impact factor
        score = base_weight * hours_factor * role_multiplier * impact_factor
        
        return score

    def calculate_total_grade(self, activities: List[Activity]) -> Dict:
        category_scores = {category: 0 for category in self.category_weights.keys()}
        total_score = 0
        
        # Calculate scores per category
        for activity in activities:
            score = self.calculate_activity_score(activity)
            category_scores[activity.category] += score
            total_score += score
        
        # Normalize total score to 100
        max_possible_score = sum(self.category_weights.values()) * 2  # Assuming perfect scores
        normalized_score = (total_score / max_possible_score) * 100
        
        # Convert to letter grade
        letter_grade = self.convert_to_letter_grade(normalized_score)
        
        return {
            "total_score": round(normalized_score, 2),
            "letter_grade": letter_grade,
            "category_scores": {k: round(v, 2) for k, v in category_scores.items()}
        }

    @staticmethod
    def convert_to_letter_grade(score: float) -> str:
        if score >= 93: return "A"
        elif score >= 90: return "A-"
        elif score >= 87: return "B+"
        elif score >= 83: return "B"
        elif score >= 80: return "B-"
        elif score >= 77: return "C+"
        elif score >= 73: return "C"
        elif score >= 70: return "C-"
        elif score >= 67: return "D+"
        elif score >= 63: return "D"
        elif score >= 60: return "D-"
        else: return "F"

# Example usage
def main():
    grading_system = ExtracurricularGradingSystem()
    
    # Sample activities for a student
    activities = [
        Activity("Student Council President", "Leadership", 80, 3, 9.0),
        Activity("Career Fair Organizer", "Career", 40, 2, 8.5),
        Activity("Industry Conference", "External Relations", 30, 1, 7.0),
        Activity("Community Service", "Social", 25, 1, 8.0),
        Activity("Dance Team", "Cultural", 45, 2, 7.5),
        Activity("Basketball Team", "Sports", 50, 1, 8.0)
    ]
    
    result = grading_system.calculate_total_grade(activities)
    print(f"Total Score: {result['total_score']}")
    print(f"Letter Grade: {result['letter_grade']}")
    print("\nCategory Scores:")
    for category, score in result['category_scores'].items():
        print(f"{category}: {score}")

if _name_ == "_main_":
    main()
