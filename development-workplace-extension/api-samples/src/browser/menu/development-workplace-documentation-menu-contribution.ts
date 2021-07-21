/* eslint-disable @typescript-eslint/tslint/config */
/* eslint-disable @typescript-eslint/quotes */

import { injectable, interfaces } from 'inversify';
import { CommandContribution, CommandRegistry, MAIN_MENU_BAR, MenuContribution, MenuModelRegistry, MenuNode, SubMenuOptions } from '@theia/core';

// Documentation Extension
export const DevelopmentWorkplaceDocumentationDocuEditor = {
    id: 'DevelopmentWorkplaceDocumentationDocuEditor.command',
    label: "Documentation Editor"
};
export const DevelopmentWorkplaceDocumentationWiki = {
    id: 'DevelopmentWorkplaceDocumentationWiki.command',
    label: 'Project Wiki'
};
export const DevelopmentWorkplaceDocumentationHelp = {
    id: 'DevelopmentWorkplaceDocumentationHelp.command',
    label: 'Help'
};

@injectable()
export class DevelopmentWorkplaceDocumentationCommandContribution implements CommandContribution {

    registerCommands(commands: CommandRegistry): void {
        commands.registerCommand(DevelopmentWorkplaceDocumentationDocuEditor, {
            execute: () => {
                alert('This is a sample command!');
            }
        });
        commands.registerCommand(DevelopmentWorkplaceDocumentationWiki, {
            execute: () => {
                alert('This is sample command!');
            }
        });
        commands.registerCommand(DevelopmentWorkplaceDocumentationHelp, {
            execute: () => {
                alert('This is sample command!');
            }
        });
    }
}

@injectable()
export class DevelopmentWorkplaceDocumentationMenuContribution implements MenuContribution {
    registerMenus(menus: MenuModelRegistry): void {
        const subMenuPath = [...MAIN_MENU_BAR, 'documentation-menu'];
        menus.registerSubmenu(subMenuPath, 'Documentation', {
            order: '4' // that should put the menu right next to the Requirements menu
        });
        menus.registerMenuAction(subMenuPath, {
            commandId: DevelopmentWorkplaceDocumentationDocuEditor.id,
            order: '0'
        });
        menus.registerMenuAction(subMenuPath, {
            commandId: DevelopmentWorkplaceDocumentationWiki.id,
            order: '2'
        });
        menus.registerMenuAction(subMenuPath, {
            commandId: DevelopmentWorkplaceDocumentationHelp.id,
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

export const bindDevelopmentWorkplaceDocumentationMenu = (bind: interfaces.Bind) => {
    bind(CommandContribution).to(DevelopmentWorkplaceDocumentationCommandContribution).inSingletonScope();
    bind(MenuContribution).to(DevelopmentWorkplaceDocumentationMenuContribution).inSingletonScope();
};
