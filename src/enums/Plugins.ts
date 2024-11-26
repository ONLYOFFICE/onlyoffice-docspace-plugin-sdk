/*
* (c) Copyright Ascensio System SIA 2024
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*     http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

/**
 * Defines the possible visibility states of a DocSpace plugin.
 *
 * @remarks
 * - active: Plugin is enabled and visible to users
 * - hide: Plugin is disabled and hidden from the user interface
 */
export const enum PluginStatus {
  active = "active",
  hide = "hide",
}
