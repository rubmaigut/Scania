import { CatalogClient } from '@backstage/catalog-client';
import { createRouter,createBuiltinActions } from '@backstage/plugin-scaffolder-backend';
import { Router } from 'express';
import type { PluginEnvironment } from '../types';
import { triggerBuildAction } from '../../../../plugins/actions/triggerBuild';
import { ScmIntegrations } from '@backstage/integration'

export default async function createPlugin(
  env: PluginEnvironment,
): Promise<Router> {
  const catalogClient = new CatalogClient({
    discoveryApi: env.discovery,
  });

  const integrations = ScmIntegrations.fromConfig(env.config);

  const actions = createBuiltinActions({
    catalogClient,
    integrations: integrations,
    config: env.config,
    reader: env.reader,
  });

  actions.push(triggerBuildAction);

  return await createRouter({
    logger: env.logger,
    config: env.config,
    database: env.database,
    reader: env.reader,
    catalogClient,
    identity: env.identity,
    permissions: env.permissions,
  });
}
