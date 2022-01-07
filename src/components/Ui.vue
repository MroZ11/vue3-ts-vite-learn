<template>
  <div class="content">
    <el-table :data="tableDataSearched" style="width: 50%">
      <el-table-column label="Date" prop="date" />filter
      <el-table-column label="Name" prop="name" />
      <el-table-column label="Address" prop="address" />
      <el-table-column align="right">
        <template #header>
          <el-input v-model="search" size="mini" placeholder="Type to search" />
        </template>
        <template #default="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >Edit</el-button
          >
          <el-popconfirm
            title="Are you sure to delete this?"
            @confirm="handleDelete(scope.$index, scope.row)"
          >
            <template #reference>
              <el-button size="mini" type="danger">Delete</el-button>
            </template>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog v-model="dialogVisible" title="Edit">
      <el-form ref="form" :model="form" label-width="120px">
        <el-form-item label="Name">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="Address">
          <el-input v-model="form.address"></el-input>
        </el-form-item>
      </el-form>
      <el-button size="mini" type="success" @click="save">Save</el-button>
      <el-button size="mini" type="danger" @click="dialogVisible = false"
        >Cancel</el-button
      >
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Customer, postCustomer } from "@/request/api/customer";
import { ElMessage } from "element-plus";

export default defineComponent({
  name: "Ui",
  computed: {
    tableDataSearched(): Customer[] {
      return this.tableData.filter(
        (data: Customer) =>
          !this.search ||
          data.name.toLowerCase().includes(this.search.toLowerCase())
      );
    },
  },
  data() {
    return {
      tableData: [
        {
          id: "1",
          date: "2016-05-03",
          name: "Tom",
          address: "No. 158, Grove St, Los Angeles",
        },
        {
          id: "2",
          date: "2015-05-03",
          name: "Jack",
          address: "No. 159, Grove St, Los Angeles",
        },
        {
          id: "3",
          date: "2014-05-03",
          name: "Rose",
          address: "No. 119, Grove St, Los Angeles",
        },
      ] as Customer[],
      search: "",
      dialogVisible: false,
      form: {} as Customer,
    };
  },
  methods: {
    handleEdit(index: number, row: Customer) {
      // this.form = row 这种方式错误 拷贝引用了 这里手动赋值
      this.form.id = row.id;
      this.form.name = row.name;
      this.form.address = row.address;
      this.form.date = row.date;
      this.dialogVisible = true;
    },
    handleDelete(index: number, row: Customer) {
      this.tableData = this.tableData.filter(
        (item: Customer) => item.id != row.id
      );
      //this.tableData.splice(index, 1);
    },
    save() {
      postCustomer(this.form)
        .then((entity) => {
          console.log(entity);
          let index = this.tableData.findIndex((d) => {
            return d.id == entity.id;
          });
          this.tableData[index] = entity;
          this.dialogVisible = false;
        })
        .catch((e) => {
          ElMessage.error(e.message);
        });
    },
  },
});
</script>

<style scoped>
.content {
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
</style>
