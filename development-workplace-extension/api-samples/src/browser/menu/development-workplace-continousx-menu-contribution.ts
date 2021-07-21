/* eslint-disable @typescript-eslint/tslint/config */
/* eslint-disable @typescript-eslint/quotes */

import { injectable, interfaces } from 'inversify';
import { CommandContribution, CommandRegistry, MAIN_MENU_BAR, MenuContribution, MenuModelRegistry, MenuNode, SubMenuOptions } from '@theia/core';

// ContinousX Extension
export const DevelopmentWorkplaceContinousXPipelines = {
    id: 'DevelopmentWorkplaceContinousXPipelines.command',
    label: "Pipelines"
};
export const DevelopmentWorkplaceContinousXEnvironments = {
    id: 'DevelopmentWorkplaceContinousXEnvironments.command',
    label: 'Environments'
};
export const DevelopmentWorkplaceContinousXReleases = {
    id: 'DevelopmentWorkplaceContinousXReleases.command',
    label: 'Releases'
};
export const DevelopmentWorkplaceContinousXDeployment = {
    id: 'DevelopmentWorkplaceContinousXDeployment.command',
    label: 'Deployment'
};
export const DevelopmentWorkplaceContinousXHelp = {
    id: 'DevelopmentWorkplaceContinousXHelp.command',
    label: 'Help'
};

@injectable()
export class DevelopmentWorkplaceContinousXCommandContribution implements CommandContribution {

    registerCommands(commands: CommandRegistry): void {
        commands.registerCommand(DevelopmentWorkplaceContinousXPipelines, {
            execute: () => {
                alert('This is a sample command!');
            }
        });
        commands.registerCommand(DevelopmentWorkplaceContinousXEnvironments, {
            execute: () => {
                alert('This is a sample command!');
            }
        });
        commands.registerCommand(DevelopmentWorkplaceContinousXReleases, {
            execute: () => {
                alert('This is a sample command!');
            }
        });
        commands.registerCommand(DevelopmentWorkplaceContinousXDeployment, {
            execute: () => {
                alert('This is a sample command!');
            }
        });
        commands.registerCommand(DevelopmentWorkplaceContinousXHelp, {
            execute: () => {
                alert('This is a sample command!');
            }
        });

    }
}

@injectable()
export class DevelopmentWorkplaceContinousXMenuContribution implements MenuContribution {
    registerMenus(menus: MenuModelRegistry): void {
        const subMenuPath = [...MAIN_MENU_BAR, 'continousx-menu'];
        menus.registerSubmenu(subMenuPath, 'ContinousX', {
            order: '4' // that should put the menu right next to the Requirements menu
        });
        menus.registerMenuAction(subMenuPath, {
            commandId: DevelopmentWorkplaceContinousXPipelines.id,
            order: '0'
        });
        menus.registerMenuAction(subMenuPath, {
            commandId: DevelopmentWorkplaceContinousXEnvironments.id,
            order: '2'
        });
        menus.registerMenuAction(subMenuPath, {
            commandId: DevelopmentWorkplaceContinousXReleases.id,
            order: '3'
        });
        menus.registerMenuAction(subMenuPath, {
            commandId: DevelopmentWorkplaceContinousXDeployment.id,
            order: '4'
        });
        menus.registerMenuAction(subMenuPath, {
            commandId: DevelopmentWorkplaceContinousXHelp.id,
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

export const bindDevelopmentWorkplaceContinousXMenu = (bind: interfaces.Bind) => {
    bind(CommandContribution).to(DevelopmentWorkplaceContinousXCommandContribution).inSingletonScope();
    bind(MenuContribution).to(DevelopmentWorkplaceContinousXMenuContribution).inSingletonScope();
};
