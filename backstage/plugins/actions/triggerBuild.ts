import { createTemplateAction } from '@backstage/plugin-scaffolder-backend';
import fetch from 'node-fetch';

export const triggerBuildAction = createTemplateAction({
  id: 'my-org/trigger-build',
  schema: {
    input: {
      required: ['repoName'],
      type: 'object',
      properties: {
        repoName: {
          type: 'string',
          title: 'Repository Name',
          description: 'The GitHub repository name to trigger the build for',
        },
      },
    },
  },
  async handler(ctx) {
    const { repoName } = ctx.input;

    const githubToken = process.env.GITHUB_TOKEN;
    const owner = 'rubmaigut'; 
    const repo = 'Scania';
    const workflowId = 'main.yml'; 

    const url = `https://api.github.com/repos/${owner}/${repo}/actions/workflows/${workflowId}/dispatches`;

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${githubToken}`,
        'Accept': 'application/vnd.github.v3+json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ref: 'main', 
      }),
    });

    if (!response.ok) {
      throw new Error(`Failed to trigger the GitHub Actions build for ${repoName}. HTTP Status: ${response.status}`);
    }

    ctx.logger.info(`Successfully triggered build for ${repoName}`);
  },
});
