/**
 * Consulting services. Each entry leads with the client's problem and the
 * outcome, not with a technology list (project-scope.md §9).
 */
export interface Service {
  title: string;
  problem: string;
  description: string;
}

export const services: Service[] = [
  {
    title: 'Data Engineering',
    problem: 'Pipelines break silently and nobody trusts the numbers.',
    description:
      'Design and development of reliable data pipelines and processing workflows - including the orchestration and monitoring that makes failures visible before your stakeholders find them.',
  },
  {
    title: 'Cloud Data Platforms',
    problem: 'The on-premises platform is at its limit and hard to scale.',
    description:
      'Migration and modernisation of on-premises data platforms on AWS and Snowflake, planned so that reporting keeps running while the platform moves underneath it.',
  },
  {
    title: 'ETL / ELT Development',
    problem: 'Data integrations are slow, brittle or poorly understood.',
    description:
      'Development, modernisation and optimisation of ETL/ELT processes and data integrations - from APIs and transactional systems through to the analytical layer.',
  },
  {
    title: 'Data Warehouse & Data Vault',
    problem: 'The warehouse cannot keep up with changing source systems.',
    description:
      'Design and implementation of scalable data warehouse architectures, including Data Vault 2.0 models and persistent staging areas that stay auditable as sources change.',
  },
  {
    title: 'Business Intelligence & Reporting',
    problem: 'The data exists, but decisions still get made on gut feeling.',
    description:
      'Development of reporting solutions and dashboards that turn complex data into information the business can actually act on.',
  },
  {
    title: 'Legacy System Migration',
    problem: 'A legacy ETL platform is becoming a risk to the business.',
    description:
      'Migration and modernisation of legacy ETL platforms - analysing what the existing jobs really do, then rebuilding them on a modern stack instead of copying the old structure across.',
  },
  {
    title: 'Technical Consulting',
    problem: 'Business requirements and technical delivery keep missing each other.',
    description:
      'Technical analysis, solution design and implementation guidance - plus the translation between technical teams and business stakeholders that keeps a project moving.',
  },
];
