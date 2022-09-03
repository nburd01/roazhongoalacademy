import React from 'react';

import {Tabs} from './Tabs'

export default {
    title: 'ORGANISMS/Tabs',
    component: Tabs,
    // argTypes: {
    //     name: 'active',
    //     type: {name: 'string', required: true},
    //     // defaultValue: null,
    //     description: 'onglet à rendre actif',
    //     control: {
    //         type: 'text',
    //     }
    // }
}

const Template = (args) => <Tabs {...args} />;

export const Primary = Template.bind({});
Primary.args = { backgroundColor: '#ff0', labelBackgroundColor: '#ae5', label: 'Tab' };

export const Secondary = Template.bind({});
Secondary.args = { ...Primary.args,labelBackgroundColor: '#ff9', label: '😄👍😍💯' };

export const Tertiary = Template.bind({});
Tertiary.args = { ...Primary.args, label: '📚📕📈🤓' };