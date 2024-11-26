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

import { IInfoPanelItem } from "../items";

/**
 * @Category Info panel Plugin
 *
 * The plugin that is embedded as a separate tab in the file info panel.
 *
 * @param infoPanelItems - Stores a collection of elements where the keys are the key parameters from the InfoPanelItem objects.
 * A list for embedding into the info panel is generated based on this collection.
 *
 * @method addInfoPanelItem - Add a new info panel item.
 * @param item - Defines an info panel item.
 *
 * @method getInfoPanelItems - Get all the info panel items.
 * @returns A collection of elements where the keys are the key parameters from the InfoPanelItem objects.
 *
 * @method updateInfoPanelItem - Update the info panel item.
 * @param item - Defines a new info panel item.
 */
export interface IInfoPanelPlugin {
  infoPanelItems: Map<string, IInfoPanelItem>;
  addInfoPanelItem(item: IInfoPanelItem): void;
  getInfoPanelItems(): Map<string, IInfoPanelItem>;
  updateInfoPanelItem(item: IInfoPanelItem): void;
}
