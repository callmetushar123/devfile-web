/**
 * Copyright 2022 Red Hat, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { existsSync, rmSync, copySync } from 'fs-extra';

export interface Config {
  sourceDir: string;
  outputDir: string;
}

export default function copyDevfileSchemas(config: Config): void {
  const { sourceDir, outputDir } = config;

  if (existsSync(outputDir)) {
    rmSync(outputDir, { recursive: true, force: true });
  }

  copySync(sourceDir, outputDir, { overwrite: true });
}
