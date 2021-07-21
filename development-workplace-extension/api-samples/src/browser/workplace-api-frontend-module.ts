/********************************************************************************
 * Copyright (C) 2019 Arm and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/

import { ContainerModule } from 'inversify';
import { bindDynamicLabelProvider } from './label/workplace-dynamic-label-provider-command-contribution';
import { bindWorkplaceUnclosableView } from './view/workplace-unclosable-view-contribution';
import { bindWorkplaceOutputChannelWithSeverity } from './output/workplace-output-channel-with-severity';
import { bindWorkplaceMenu } from './menu/workplace-menu-contribution';
import { bindDevelopmentWorkplaceRequirementsMenu } from './menu/development-workplace-requirements-menu-contribution';
import { bindDevelopmentWorkplaceMBSEMenu } from './menu/development-workplace-mbse-menu-contribution';
import { bindDevelopmentWorkplaceContinousXMenu } from './menu/development-workplace-continousx-menu-contribution';
import { bindDevelopmentWorkplaceDocumentationMenu } from './menu/development-workplace-documentation-menu-contribution';
import { bindDevelopmentWorkplaceScenarioMenu } from './menu/development-workplace-scenario-menu-contribution';
import { bindDevelopmentWorkplaceSimulationMenu } from './menu/development-workplace-simulation-menu-contribution';

export default new ContainerModule(bind => {
    bindDynamicLabelProvider(bind);
    bindWorkplaceUnclosableView(bind);
    bindWorkplaceOutputChannelWithSeverity(bind);
    bindWorkplaceMenu(bind);
    bindDevelopmentWorkplaceRequirementsMenu(bind);
    bindDevelopmentWorkplaceMBSEMenu(bind);
    bindDevelopmentWorkplaceContinousXMenu(bind);
    bindDevelopmentWorkplaceDocumentationMenu(bind);
    bindDevelopmentWorkplaceScenarioMenu(bind);
    bindDevelopmentWorkplaceSimulationMenu(bind);
});
