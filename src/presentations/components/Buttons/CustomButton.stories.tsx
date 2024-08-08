import CustomButton from "./CustomButton";

export default {
    title: "Components/CustomButton",
    component: CustomButton,
    argTypes: {
        label: { control: "text" },
        loading: { control: "boolean" },
        onClick: { action: "clicked" },
    },
};

const Template = (args) => <CustomButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    label: "Primary Button",
    loading: false,
};

export const Loading = Template.bind({});
Loading.args = {
    label: "Loading Button",
    loading: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
    label: "Disabled Button",
    disabled: true,
};
