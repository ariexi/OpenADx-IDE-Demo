/********************************************************************************
 * Copyright (C) 2020 TypeFox and others.
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
import { ElectronIpcConnectionProvider } from '@theia/core/lib/electron-browser/messaging/electron-ipc-connection-provider';
import { CommandContribution, MenuContribution } from '@theia/core/lib/common';
import { WorkplaceUpdater, WorkplaceUpdaterPath, WorkplaceUpdaterClient } from '../../common/updater/workplace-updater';
import { WorkplaceUpdaterFrontendContribution, ElectronMenuUpdater, WorkplaceUpdaterClientImpl } from './workplace-updater-frontend-contribution';

export default new ContainerModule(bind => {
    bind(ElectronMenuUpdater).toSelf().inSingletonScope();
    bind(WorkplaceUpdaterClientImpl).toSelf().inSingletonScope();
    bind(WorkplaceUpdaterClient).toService(WorkplaceUpdaterClientImpl);
    bind(WorkplaceUpdater).toDynamicValue(context => {
        const client = context.container.get(WorkplaceUpdaterClientImpl);
        return ElectronIpcConnectionProvider.createProxy(context.container, WorkplaceUpdaterPath, client);
    }).inSingletonScope();
    bind(WorkplaceUpdaterFrontendContribution).toSelf().inSingletonScope();
    bind(MenuContribution).toService(WorkplaceUpdaterFrontendContribution);
    bind(CommandContribution).toService(WorkplaceUpdaterFrontendContribution);
});
