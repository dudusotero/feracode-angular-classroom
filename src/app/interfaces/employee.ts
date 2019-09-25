enum Role {
  BACKEND,
  FRONTEND,
  DESIGN,
  ADMIN,
  QA
}

export interface Employee {
  id: string;
  name: string;
  role: Role;
}
