/**
 * Technologies and concepts, grouped logically rather than as one long list
 * (project-scope.md §10). Everything here is drawn from projekterfahrung.md.
 */
export interface ExpertiseGroup {
  title: string;
  items: string[];
}

export const expertise: ExpertiseGroup[] = [
  {
    title: 'Cloud',
    items: ['AWS', 'AWS Glue', 'AWS EC2', 'AWS ECS'],
  },
  {
    title: 'Data Engineering',
    items: ['Dagster OSS', 'dbt OSS', 'PySpark', 'Matillion ETL', 'ETL / ELT'],
  },
  {
    title: 'Data Platforms',
    items: ['Snowflake', 'PostgreSQL', 'DuckDB', 'Microsoft SQL Server'],
  },
  {
    title: 'Data Architecture',
    items: ['Data Mart', 'Data Vault 2.0', 'Data Warehouse', 'Persistent Staging Area'],
  },
  {
    title: 'Business Intelligence',
    items: ['Metabase', 'Power BI', 'Microsoft Excel'],
  },
  {
    title: 'DevOps & Automation',
    items: ['Git', 'GitLab', 'Azure DevOps', 'Ansible', 'CI/CD'],
  },
];
