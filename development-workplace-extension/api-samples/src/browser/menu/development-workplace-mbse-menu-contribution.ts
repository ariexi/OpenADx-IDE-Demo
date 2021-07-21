/* eslint-disable @typescript-eslint/tslint/config */
/* eslint-disable @typescript-eslint/quotes */

import { injectable, interfaces } from 'inversify';
import { CommandContribution, CommandRegistry, MAIN_MENU_BAR, MenuContribution, MenuModelRegistry, MenuNode, SubMenuOptions } from '@theia/core';

// MBSE - model based software engineering Extension
export const DevelopmentWorkplaceMBSEModelEditor = {
    id: 'DevelopmentWorkplaceMBSEModelEditor.command',
    label: "Model Editor"
};
export const DevelopmentWorkplaceMBSEDiagrams = {
    id: 'DevelopmentWorkplaceMBSEDiagrams.command',
    label: 'Diagrams'
};
export const DevelopmentWorkplaceMBSEHelp = {
    id: 'DevelopmentWorkplaceMBSEHelp.command',
    label: 'Help'
};

@injectable()
export class DevelopmentWorkplaceMBSECommandContribution implements CommandContribution {

    registerCommands(commands: CommandRegistry): void {
        commands.registerCommand(DevelopmentWorkplaceMBSEModelEditor, {
            execute: () => {
                alert('This is a sample command!');
            }
        });
        commands.registerCommand(DevelopmentWorkplaceMBSEDiagrams, {
            execute: () => {
                alert('This is a sample command!');
            }
        });
        commands.registerCommand(DevelopmentWorkplaceMBSEHelp, {
            execute: () => {
                alert('This is a sample command!');
            }
        });
    }
}

@injectable()
export class DevelopmentWorkplaceMBSEMenuContribution implements MenuContribution {
    registerMenus(menus: MenuModelRegistry): void {
        const subMenuPath = [...MAIN_MENU_BAR, 'mbse-menu'];
        menus.registerSubmenu(subMenuPath, 'MBSE', {
            order: '4' // that should put the menu right next to the Requirements menu
        });
        menus.registerMenuAction(subMenuPath, {
            commandId: DevelopmentWorkplaceMBSEModelEditor.id,
            order: '0'
        });
        menus.registerMenuAction(subMenuPath, {
            commandId: DevelopmentWorkplaceMBSEDiagrams.id,
            order: '2'
        });
        menus.registerMenuAction(subMenuPath, {
            commandId: DevelopmentWorkplaceMBSEHelp.id,
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

export const bindDevelopmentWorkplaceMBSEMenu = (bind: interfaces.Bind) => {
    bind(CommandContribution).to(DevelopmentWorkplaceMBSECommandContribution).inSingletonScope();
    bind(MenuContribution).to(DevelopmentWorkplaceMBSEMenuContribution).inSingletonScope();
};
