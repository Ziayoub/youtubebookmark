<template>
  <modal
    :name="name"
    :width="800"
    :height="800"
  >
    <form class="p-4 h-100 d-flex flex-column justify-content-between">
      <div>
        <h2 class="pt-1 pb-5">Create new category</h2>
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" class="form-control" id="name" @input="setCategoryName" :value="categoryName">
        </div>

        <!-- Color input -->
        <div class="form-group">
          <label for="color">Color</label>
          <v-select :value="color" @input="setColor" :options="colorOptions" label="name">
            <template slot="option" slot-scope="option">
              <div class="d-flex align-items-center py-2">
                <div :style="{
                    display: 'inline-block',
                    height: '20px',
                    width: '20px',
                    borderRadius: '50%',
                    backgroundColor: option.color
                  }"
                />
                <span class="ml-2">{{ option.name }}</span>
              </div>
            </template>
          </v-select>
        </div>

        <!-- Icon input -->
         <div class="form-group">
          <label for="icon">Icon</label>
          <v-select :value="icon" @input="setIcon" :options="iconOptions" label="iconName" >
            <template slot="option" slot-scope="option" >
              <div class="d-flex align-items-center py-2 ">
                <div :style="{
                    display: 'inline-block',
                    height: '20px',
                    width: '20px',
                  
                  }"
                />
                  <span class="ml-2" style="background-color: pink;width: 100%;"><i :class="['icon', `eva eva-${option.iconName}`]" :style="{fontSize: '22px', marginRight: '10px', backgroundColor: 'red'}"/> {{ option.iconName }}</span> 
              </div>
            </template>
          </v-select>
        </div>
      </div>

      <div class="pull-right">
        <button type="cancel" class="btn btn-primary mr-1">Cancel</button>
        <button type="submit" class="btn btn-primary ">Save</button>
      </div>

    </form>
  </modal>
</template>

<script>
import colorOptions from '../../data/colorOptions';
import iconOptions from '../../data/iconOptions';

export default {
  props: {
    name: String,
    iconName: String
  },
  data: () => ({
    categoryName: '',

    color: colorOptions[0],
    colorOptions,

    icon : iconOptions[0],
    iconOptions
  }),
  methods: {
    setColor(value) {
      this.color = value;
    },
    setCategoryName(e) {
      this.categoryName = e.target.value;
    },
    setIcon(value) {
      this.icon = value;
    },
  }

}
</script>
