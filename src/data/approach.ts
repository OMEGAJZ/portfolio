/**
 * The consulting differentiator: working across the technical and the business
 * side of a data project (project-scope.md §12).
 */
export interface ApproachStep {
  title: string;
  description: string;
}

export const approach: ApproachStep[] = [
  {
    title: 'Understand the requirement',
    description:
      'Start with the business question behind the ticket. What decision depends on this data, and who has to trust it?',
  },
  {
    title: 'Translate it into a solution',
    description:
      'Turn those requirements into a concrete technical design — data model, pipeline, orchestration and the deployment path to production.',
  },
  {
    title: 'Build and integrate',
    description:
      'Implement the pipelines, transformations and platform components, and connect the source systems that feed them.',
  },
  {
    title: 'Coordinate and communicate',
    description:
      'Keep stakeholders, developers and priorities aligned as the work progresses, acting as the interface between the business and the technical team.',
  },
  {
    title: 'Support in production',
    description:
      'Take responsibility past go-live: deployments across environments, monitoring, and the ongoing development of the data landscape.',
  },
];
