/* eslint-disable @typescript-eslint/tslint/config */
/* eslint-disable @typescript-eslint/quotes */

import { injectable, interfaces } from 'inversify';
import { CommandContribution, CommandRegistry, MAIN_MENU_BAR, MenuContribution, MenuModelRegistry, MenuNode, SubMenuOptions } from '@theia/core';

// Requirements Extension
export const DevelopmentWorkplaceRequirementsNewItem = {
    id: 'DevelopmentWorkplaceRequirementsNewItem.command',
    label: "New Item"
};
export const DevelopmentWorkplaceRequirementsMyItems = {
    id: 'DevelopmentWorkplaceRequirementsMyItems.command',
    label: 'My Items'
};
export const DevelopmentWorkplaceRequirementsRecent = {
    id: 'DevelopmentWorkplaceRequirementsRecent.command',
    label: 'Recent'
};
export const DevelopmentWorkplaceRequirementsFeatureTimeline = {
    id: 'DevelopmentWorkplaceRequirementsFeatureTimeline.command',
    label: 'Feature Timeline'
};
export const DevelopmentWorkplaceRequirementsEpicRoadmap = {
    id: 'DevelopmentWorkplaceRequirementsEpicRoadmap.command',
    label: 'Epic Roadmap'
};
export const DevelopmentWorkplaceRequirementsAnalytics = {
    id: 'DevelopmentWorkplaceRequirementsAnalytics.command',
    label: 'Analytics'
};
export const DevelopmentWorkplaceRequirementsHelp = {
    id: 'DevelopmentWorkplaceRequirementsHelp.command',
    label: 'Help'
};
export const DevelopmentWorkplaceRequirementsCommand = {
    id: 'DevelopmentWorkplaceRequirementsCommand.command',
    label: "Say Hello"
};

@injectable()
export class DevelopmentWorkplaceRequirementsCommandContribution implements CommandContribution {

    registerCommands(commands: CommandRegistry): void {
        commands.registerCommand(DevelopmentWorkplaceRequirementsNewItem, {
            execute: () => {
                alert('This is a sample command!');
            }
        });
        commands.registerCommand(DevelopmentWorkplaceRequirementsMyItems, {
            execute: () => {
                alert('This is a sample command!');
            }
        });
        commands.registerCommand(DevelopmentWorkplaceRequirementsRecent, {
            execute: () => {
                alert('This is a sample command!');
            }
        });
        commands.registerCommand(DevelopmentWorkplaceRequirementsFeatureTimeline, {
            execute: () => {
                alert('This is a sample command!');
            }
        });
        commands.registerCommand(DevelopmentWorkplaceRequirementsEpicRoadmap, {
            execute: () => {
                alert('This is a sample command!');
            }
        });
        commands.registerCommand(DevelopmentWorkplaceRequirementsAnalytics, {
            execute: () => {
                alert('This is a sample command!');
            }
        });
        commands.registerCommand(DevelopmentWorkplaceRequirementsHelp, {
            execute: () => {
                alert('This is a sample command!');
            }
        });

    }
}

@injectable()
export class DevelopmentWorkplaceRequirementsMenuContribution implements MenuContribution {
    registerMenus(menus: MenuModelRegistry): void {
        const subMenuPath = [...MAIN_MENU_BAR, 'requirements-menu'];
        menus.registerSubmenu(subMenuPath, 'Requirements', {
            order: '4' // that should put the menu right next to the Edit menu
        });
        menus.registerMenuAction(subMenuPath, {
            commandId: DevelopmentWorkplaceRequirementsNewItem.id,
            order: '0'
        });
        menus.registerMenuAction(subMenuPath, {
            commandId: DevelopmentWorkplaceRequirementsMyItems.id,
            order: '2'
        });
        menus.registerMenuAction(subMenuPath, {
            commandId: DevelopmentWorkplaceRequirementsRecent.id,
            order: '3'
        });
        menus.registerMenuAction(subMenuPath, {
            commandId: DevelopmentWorkplaceRequirementsFeatureTimeline.id,
            order: '4'
        });
        menus.registerMenuAction(subMenuPath, {
            commandId: DevelopmentWorkplaceRequirementsEpicRoadmap.id,
            order: '5'
        });
        menus.registerMenuAction(subMenuPath, {
            commandId: DevelopmentWorkplaceRequirementsAnalytics.id,
            order: '6'
        });
        menus.registerMenuAction(subMenuPath, {
            commandId: DevelopmentWorkplaceRequirementsHelp.id,
            order: '7'
        });

        const subSubMenuPath = [...subMenuPath, 'requirements-sub-menu'];
        menus.registerSubmenu(subSubMenuPath, 'Requirements sub menu', { order: '8' });
        menus.registerMenuAction(subSubMenuPath, {
            commandId: DevelopmentWorkplaceRequirementsHelp.id,
            order: '1'
        });
        menus.registerMenuAction(subSubMenuPath, {
            commandId: DevelopmentWorkplaceRequirementsCommand.id,
            order: '2'
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

export const bindDevelopmentWorkplaceRequirementsMenu = (bind: interfaces.Bind) => {
    bind(CommandContribution).to(DevelopmentWorkplaceRequirementsCommandContribution).inSingletonScope();
    bind(MenuContribution).to(DevelopmentWorkplaceRequirementsMenuContribution).inSingletonScope();
};
