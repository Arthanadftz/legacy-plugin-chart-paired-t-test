declare const _default: {
    controlPanelSections: ({
        label: string;
        expanded: boolean;
        controlSetRows: ((string | null)[] | {
            name: string;
            config: {
                type: string;
                label: string;
                default: boolean;
                description: string;
            };
        }[])[];
    } | {
        label: string;
        expanded: boolean;
        controlSetRows: {
            name: string;
            config: {
                type: string;
                label: string;
                default: number;
                description: string;
            };
        }[][];
    })[];
};
export default _default;
//# sourceMappingURL=controlPanel.d.ts.map