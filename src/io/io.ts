/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */

// Importing loca_storage and indexed_db is necessary for the routers to be
// registered.
import './indexed_db';
import './local_storage';

import {browserFiles} from './browser_files';
import {browserHTTPRequest} from './browser_http';
import {decodeWeights, encodeWeights} from './io_utils';
import {IORouterRegistry} from './router_registry';
// tslint:disable-next-line:max-line-length
import {IOHandler, LoadHandler, ModelArtifacts, SaveConfig, SaveHandler, SaveResult, WeightsManifestConfig, WeightsManifestEntry} from './types';
import {loadWeights} from './weights_loader';

const registerSaveRouter = IORouterRegistry.registerSaveRouter;
const registerLoadRouter = IORouterRegistry.registerLoadRouter;
const getSaveHandlers = IORouterRegistry.getSaveHandlers;
const getLoadHandlers = IORouterRegistry.getLoadHandlers;

export {
  browserFiles,
  browserHTTPRequest,
  decodeWeights,
  encodeWeights,
  getLoadHandlers,
  getSaveHandlers,
  IOHandler,
  LoadHandler,
  loadWeights,
  ModelArtifacts,
  registerLoadRouter,
  registerSaveRouter,
  SaveConfig,
  SaveHandler,
  SaveResult,
  WeightsManifestConfig,
  WeightsManifestEntry
};
