
<template>
  <p class="side title">登录/注册</p>
  <div class="side form-wrap ">
    <van-form @submit="onSubmit">
      <van-cell-group>
        <van-field
          v-model.trim="username"
          name="username"
          label="用户名"
          placeholder="请输入用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model.trim="password"
          type="password"
          name="password"
          label="密码"
          placeholder="请输入密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
      </van-cell-group>
      <div style="margin-top: 16px;">
        <van-button class="btn-style" block type="success" native-type="submit">
          登录
        </van-button>
      </div>
    </van-form>
  </div>
  <p class="foot-text">持续更新中~</p>
</template>

<script>
import { NavBar, Icon, Form, Field, CellGroup, Toast } from "vant";
import { ref } from "vue";
import { login } from "../../api/user.js";
import { useStore } from "vuex";
export default {
  components: {
    [NavBar.name]: NavBar,
    [Icon.name]: Icon,
    [Form.name]: Form,
    [Field.name]: Field,
    [CellGroup.name]: CellGroup,
    [Toast.name]: Toast,
  },
  setup() {
    const username = ref("");
    const password = ref("");

    const store = useStore();

    const onSubmit = (values) => {
      console.log("submit", values);
      login(values).then(function (res) {
        console.log(res.data);
        store.commit("setToken", res.data.data.TOKEN);
        Toast({
          message: "登录成功",
          icon: "success",
        });
      });
    };
    return {
      username,
      password,
      onSubmit,
    };
  },
};
</script>

<style scoped lang="scss">
.side{
  width: 80%;
  height: auto;
  // background-color: aquamarine;
  margin: 0 auto;
}
.title{
  text-align: left;
  margin-top: 140px;
}
.form-wrap{
  margin-top:50px;
  .btn-style{
    font-size: 34px;
    letter-spacing: 3px;
  }
  .van-field__label{
    color: $green;
  }
}
.foot-text{
  font-size: 24px;
  color: #666;
  margin-top: 600px;
}
</style>
