/* eslint-disable @typescript-eslint/tslint/config */
/* eslint-disable @typescript-eslint/quotes */

import { injectable, interfaces } from 'inversify';
import { CommandContribution, CommandRegistry, MAIN_MENU_BAR, MenuContribution, MenuModelRegistry, MenuNode, SubMenuOptions } from '@theia/core';

// Scenario Extension
export const DevelopmentWorkplaceScenarioScenarioEditor = {
    id: 'DevelopmentWorkplaceScenarioScenarioEditor.command',
    label: "Scenario Editor openSCENARIO"
};
export const DevelopmentWorkplaceScenarioDataLibrary = {
    id: 'DevelopmentWorkplaceScenarioDataLibrary.command',
    label: 'Scenario Data Library'
};
export const DevelopmentWorkplaceScenarioHelp = {
    id: 'DevelopmentWorkplaceScenarioHelp.command',
    label: 'Help'
};

@injectable()
export class DevelopmentWorkplaceScenarioCommandContribution implements CommandContribution {

    registerCommands(commands: CommandRegistry): void {
        commands.registerCommand(DevelopmentWorkplaceScenarioScenarioEditor, {
            execute: () => {
                alert('This is a sample command!');
            }
        });
        commands.registerCommand(DevelopmentWorkplaceScenarioDataLibrary, {
            execute: () => {
                alert('This is a sample command!');
            }
        });
        commands.registerCommand(DevelopmentWorkplaceScenarioHelp, {
            execute: () => {
                alert('This is a sample command!');
            }
        });
    }
}

@injectable()
export class DevelopmentWorkplaceScenarioMenuContribution implements MenuContribution {
    registerMenus(menus: MenuModelRegistry): void {
        const subMenuPath = [...MAIN_MENU_BAR, 'scenario-menu'];
        menus.registerSubmenu(subMenuPath, 'Scenario Data Library', {
            order: '4' // that should put the menu right next to the Requirements menu
        });
        menus.registerMenuAction(subMenuPath, {
            commandId: DevelopmentWorkplaceScenarioScenarioEditor.id,
            order: '0'
        });
        menus.registerMenuAction(subMenuPath, {
            commandId: DevelopmentWorkplaceScenarioDataLibrary.id,
            order: '2'
        });
        menus.registerMenuAction(subMenuPath, {
            commandId: DevelopmentWorkplaceScenarioHelp.id,
            order: '3'
        });
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

export const bindDevelopmentWorkplaceScenarioMenu = (bind: interfaces.Bind) => {
    bind(CommandContribution).to(DevelopmentWorkplaceScenarioCommandContribution).inSingletonScope();
    bind(MenuContribution).to(DevelopmentWorkplaceScenarioMenuContribution).inSingletonScope();
};
