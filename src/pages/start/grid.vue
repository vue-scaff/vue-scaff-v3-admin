<style lang="less">
.ant-col {
  color: @white;
  background-color: @primary;
  padding: @atom 0;

  &:nth-child(2n + 1) {
    background-color: lighten(@primary, 12%);
  }
}
</style>

<template>
  <div class="grid">
    <vs-section>
      <a-divider orientation="left">Normal</a-divider>
      <a-row type="flex">
        <a-col :span="6" :order="4">1 col-order-4</a-col>
        <a-col :span="6" :order="3">2 col-order-3</a-col>
        <a-col :span="6" :order="2">3 col-order-2</a-col>
        <a-col :span="6" :order="1">4 col-order-1</a-col>
      </a-row>
    </vs-section>

    <vs-section>
      <a-divider orientation="left">Responsive</a-divider>
      <a-row type="flex">
        <a-col :span="6" :xs="{ order: 1 }" :sm="{ order: 2 }" :md="{ order: 3 }" :lg="{ order: 4 }"> 1 col-order-responsive </a-col>
        <a-col :span="6" :xs="{ order: 2 }" :sm="{ order: 1 }" :md="{ order: 4 }" :lg="{ order: 3 }"> 2 col-order-responsive </a-col>
        <a-col :span="6" :xs="{ order: 3 }" :sm="{ order: 4 }" :md="{ order: 2 }" :lg="{ order: 2 }"> 3 col-order-responsive </a-col>
        <a-col :span="6" :xs="{ order: 4 }" :sm="{ order: 3 }" :md="{ order: 1 }" :lg="{ order: 1 }"> 4 col-order-responsive </a-col>
      </a-row>
    </vs-section>

    <vs-section>
      <a-divider orientation="left">Percentage columns</a-divider>
      <a-row type="flex">
        <a-col :flex="2">2 / 5</a-col>
        <a-col :flex="3">3 / 5</a-col>
      </a-row>
      <a-divider orientation="left">Fill rest</a-divider>
      <a-row type="flex">
        <a-col flex="100px">100px</a-col>
        <a-col flex="auto">auto</a-col>
      </a-row>
      <a-divider orientation="left">Raw flex style</a-divider>
      <a-row type="flex">
        <a-col flex="1 1 200px">1 1 200px</a-col>
        <a-col flex="0 1 300px">0 1 300px</a-col>
      </a-row>
    </vs-section>

    <vs-section>
      <a-divider orientation="left">Gutter</a-divider>
      <div class="gutter-example">
        <a-row :gutter="16">
          <a-col class="gutter-row" :span="6">
            <div class="gutter-box">col-6</div>
          </a-col>
          <a-col class="gutter-row" :span="6">
            <div class="gutter-box">col-6</div>
          </a-col>
          <a-col class="gutter-row" :span="6">
            <div class="gutter-box">col-6</div>
          </a-col>
          <a-col class="gutter-row" :span="6">
            <div class="gutter-box">col-6</div>
          </a-col>
        </a-row>
      </div>
    </vs-section>
  </div>
</template>
