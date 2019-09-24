enum Role {
  "Backend Developer" = "BACKEND",
  "Frontend Developer" = "FRONTEND",
  "Designer" = "DESIGN",
  "Administrator" = "ADMIN",
  "Quality Assurance" = "QA"
}

export interface Employee {
  id: string;
  name: string;
  role: Role;
}
