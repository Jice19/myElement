<template>
  <label role="checkbox" :class="['switch', { toggled }]">
    <input type="checkbox" class="switch-input" @change="toggle" />
    <div class="switch-core" :style="{ backgroundColor: toggled ? colorChecked : colorUnchecked }">
      <div class="switch-button" :style="{ transition: `transform ${speed}ms`, transform: toggled ? null : `translate3d(32px, 0px, 0px)` }"></div>
    </div>
    <span class="switch-label label-right" v-if="toggled" v-html="labelChecked"></span>
    <span class="switch-label label-left" v-html="labelUnchecked" v-else></span>
  </label>
</template>

<script >
export default {
  name: 'mySwitch',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    speed: {
      type: Number,
      default: 200
    },
    labelChecked: {
      type: String,
      default: '开'
    },
    labelUnchecked: {
      type: String,
      default: '关'
    },
    colorChecked: {
      type: String,
      default: '#4caf50'
    },
    colorUnchecked: {
      type: String,
      default: '#ccc'
    }
  },
  data() {
    return {
      toggled: this.value
    };
  },
  watch: {
    value(newVal) {
      this.toggled = newVal;
    }
  },
  methods: {
    toggle(event) {
      this.toggled = event.target.checked;
      this.$emit('input', this.toggled);
      this.$emit('change', this.toggled);
    }
  }
};
</script>


<style scoped lang='less'>
.switch {
  position: relative;
  display: inline-block;
  width: 64px;
  height: 32px;
  cursor: pointer;
}

.switch-input {
  position: absolute;
  width: 0;
  height: 0;
  opacity: 0;
}

.switch-core {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  border-radius: 16px;
  transition: background-color 0.3s;
}

.switch-button {
  position: absolute;
  top: 2px;
  left: 2px;
  width: 28px;
  height: 28px;
  background-color: white;
  border-radius: 50%;
  transition: transform 0.3s;
}

.switch-label {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 14px;
}

.label-right {
  right: 8px;
}

.label-left {
  left: 8px;
}

</style>
