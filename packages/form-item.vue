<template>
    <div class="hm-form-item">
        <label class="hm-form-item-label" :style="{width: this.Form.labelWidth}">{{label}}</label>
        <div class="hm-form-item-content">
            <slot />
        </div>
    </div>
</template>

<script>
export default {
    name: 'HmFormItem',
    inject: ['Form'],
    props: {
        label: {
            type: String,
            default: ''
        }
    }
}
</script>

<style lang="scss" scoped>
    .hm-form-item {
        margin-bottom: 25px;
        &-label {
            text-align: right;
            vertical-align: middle;
            float: left;
            font-size: 14px;
            color: #606266;
            line-height: 40px;
            padding: 0 12px 0 0;
            box-sizing: border-box;
        }
        &-content {
            line-height: 40px;
            position: relative;
            font-size: 14px;
            overflow: hidden;
        }
    }
</style>