# Extracurricular Activities Portal

## Overview
This project is a web application for managing and visualizing student extracurricular activities and their corresponding grades. It provides a comprehensive grading system, activity tracking, and data analysis features.

## Key Features
1. **Dashboard**
   - Summary cards for overall grade, total score, activity count, and hours invested
   - Visualization of category-wise scores, activity distribution, and time allocation

2. **Activity Management**
   - CRUD operations for activities
   - Form fields for activity details (name, category, hours, role, impact)
   - Bulk import/export of activities

3. **Grade Analysis**
   - Detailed breakdown of scores by category
   - Individual activity scores and role level distribution
   - Grade history and "what-if" scenario calculator

4. **Insights Panel**
   - Category-wise recommendations
   - Warnings and suggestions for maximum hours, role diversity, impact trends

## Technical Details
- **Frontend**: Built using React, with a focus on responsive design and data visualization
- **Backend**: Powered by a Python Flask API, handling the grading system logic
- **Data Storage**: Utilizes a SQLite database for storing activity and user data
- **UI Components**: Leverages the Shadcn UI library for a consistent and modern look and feel
- **Charting**: Employs the Recharts library for interactive and customizable data visualizations
- **Styling**: Uses Tailwind CSS for utility-based styling and easy theme customization

## Getting Started
To run the Extracurricular Activities Portal locally, follow these steps:

1. Clone the repository:
```
git clone https://github.com/your-username/extracurricular-activities-portal.git
```

2. Install dependencies:
```
cd extracurricular-activities-portal
pip install -r requirements.txt
npm install
```

3. Start the backend server:
```
python app.py
```

4. Start the frontend development server:
```
npm start
```

The application should now be accessible at `http://localhost:3000`.

## Contributing
We welcome contributions to this project! If you find any issues or have ideas for new features, please feel free to open a GitHub issue or submit a pull request.

## License
This project is licensed under the [MIT License](LICENSE).
