/* eslint-disable @typescript-eslint/tslint/config */
/* eslint-disable @typescript-eslint/quotes */

import { injectable, interfaces } from 'inversify';
import { CommandContribution, CommandRegistry, MAIN_MENU_BAR, MenuContribution, MenuModelRegistry, MenuNode, SubMenuOptions } from '@theia/core';

// Simulation Extension
export const DevelopmentWorkplaceSimulationCloe = {
    id: 'DevelopmentWorkplaceSimulationCloe.command',
    label: "Cloe"
};
export const DevelopmentWorkplaceSimulationCARLA = {
    id: 'DevelopmentWorkplaceSimulationCARLA.command',
    label: 'CARLA'
};
export const DevelopmentWorkplaceSimulationSUMO = {
    id: 'DevelopmentWorkplaceSimulationSUMO.command',
    label: 'SUMO'
};
export const DevelopmentWorkplaceSimulationHelp = {
    id: 'DevelopmentWorkplaceSimulationHelp.command',
    label: 'Help'
};

@injectable()
export class DevelopmentWorkplaceSimulationCommandContribution implements CommandContribution {

    registerCommands(commands: CommandRegistry): void {
        commands.registerCommand(DevelopmentWorkplaceSimulationCloe, {
            execute: () => {
                alert('This is a sample command!');
            }
        });
        commands.registerCommand(DevelopmentWorkplaceSimulationCARLA, {
            execute: () => {
                alert('This is a sample command!');
            }
        });
        commands.registerCommand(DevelopmentWorkplaceSimulationSUMO, {
            execute: () => {
                alert('This is a sample command!');
            }
        });
        commands.registerCommand(DevelopmentWorkplaceSimulationHelp, {
            execute: () => {
                alert('This is a sample command!');
            }
        });
    }
}

@injectable()
export class DevelopmentWorkplaceSimulationMenuContribution implements MenuContribution {
    registerMenus(menus: MenuModelRegistry): void {
        const subMenuPath = [...MAIN_MENU_BAR, 'simulation-menu'];
        menus.registerSubmenu(subMenuPath, 'Simulation', {
            order: '4' // that should put the menu right next to the Requirements menu
        });
        menus.registerMenuAction(subMenuPath, {
            commandId: DevelopmentWorkplaceSimulationCloe.id,
            order: '0'
        });
        menus.registerMenuAction(subMenuPath, {
            commandId: DevelopmentWorkplaceSimulationCARLA.id,
            order: '3'
        });
        menus.registerMenuAction(subMenuPath, {
            commandId: DevelopmentWorkplaceSimulationSUMO.id,
            order: '4'
        });
        menus.registerMenuAction(subMenuPath, {
            commandId: DevelopmentWorkplaceSimulationHelp.id,
            order: '5'
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

export const bindDevelopmentWorkplaceSimulationMenu = (bind: interfaces.Bind) => {
    bind(CommandContribution).to(DevelopmentWorkplaceSimulationCommandContribution).inSingletonScope();
    bind(MenuContribution).to(DevelopmentWorkplaceSimulationMenuContribution).inSingletonScope();
};
