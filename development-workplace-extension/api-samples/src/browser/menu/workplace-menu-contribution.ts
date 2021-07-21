/********************************************************************************
 * Copyright (C) 2020 TORO Limited and others.
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

import { Command, CommandContribution, CommandRegistry, MAIN_MENU_BAR, MenuContribution, MenuModelRegistry, MenuNode, SubMenuOptions } from '@theia/core/lib/common';
import { injectable, interfaces } from 'inversify';

const WorkplaceCommand: Command = {
    id: 'workplace-command',
    label: 'Workplace Command'
};
const WorkplaceCommand2: Command = {
    id: 'workplace-command2',
    label: 'Workplace Command2'
};

@injectable()
export class WorkplaceCommandContribution implements CommandContribution {
    registerCommands(commands: CommandRegistry): void {
        commands.registerCommand(WorkplaceCommand, {
            execute: () => {
                alert('This is a sample command!');
            }
        });
        commands.registerCommand(WorkplaceCommand2, {
            execute: () => {
                alert('This is sample command2!');
            }
        });
    }

}

@injectable()
export class WorkplaceMenuContribution implements MenuContribution {
    registerMenus(menus: MenuModelRegistry): void {
        const subMenuPath = [...MAIN_MENU_BAR, 'workplace-menu'];
        menus.registerSubmenu(subMenuPath, 'Workplace Menu', {
            order: '4' // that should put the menu right next to the Selection menu
        });
        menus.registerMenuAction(subMenuPath, {
            commandId: WorkplaceCommand.id,
            order: '0'
        });
        menus.registerMenuAction(subMenuPath, {
            commandId: WorkplaceCommand2.id,
            order: '2'
        });
        const subSubMenuPath = [...subMenuPath, 'workplace-sub-menu'];
        menus.registerSubmenu(subSubMenuPath, 'Workplace sub menu', { order: '2' });
        menus.registerMenuAction(subSubMenuPath, {
            commandId: WorkplaceCommand.id,
            order: '1'
        });
        menus.registerMenuAction(subSubMenuPath, {
            commandId: WorkplaceCommand2.id,
            order: '3'
        });
        const placeholder = new PlaceholderMenuNode([...subSubMenuPath, 'placeholder'].join('-'), 'Placeholder', { order: '0' });
        menus.registerMenuNode(subSubMenuPath, placeholder);
    }

}

/**
 * Special menu node that is not backed by any commands and is always disabled.
 */
export class PlaceholderMenuNode implements MenuNode {

    constructor(readonly id: string, public readonly label: string, protected options?: SubMenuOptions) { }

    get icon(): string | undefined {
        return this.options?.iconClass;
    }

    get sortString(): string {
        return this.options?.order || this.label;
    }

}

export const bindWorkplaceMenu = (bind: interfaces.Bind) => {
    bind(CommandContribution).to(WorkplaceCommandContribution).inSingletonScope();
    bind(MenuContribution).to(WorkplaceMenuContribution).inSingletonScope();
};
