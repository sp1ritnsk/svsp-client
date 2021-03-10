<template>
  <!-- <div style="height:100%"> -->
  <vl-map
    :load-tiles-while-animating="true"
    :load-tiles-while-interacting="true"
    class="map"
    ref="map"
    @pointermove="onMapPointerMove"
    :style="{ cursor: mapCursor }"
  >
    <vl-view
      :zoom.sync="zoom"
      :center.sync="center"
      :rotation.sync="rotation"
    ></vl-view>

    <vl-layer-tile id="osm">
      <vl-source-osm></vl-source-osm>
    </vl-layer-tile>

    <vl-layer-vector overlay id="stations">
      <vl-source-vector
        :features="stations"
        projection="EPSG:4326"
      ></vl-source-vector>
      <vl-style-box>
        <vl-style-circle :radius="6">
          <vl-style-fill color="rgba(24, 177, 10, 1)"></vl-style-fill>
          <vl-style-stroke
            :width="6"
            color="rgba(133, 231, 124, 1)"
          ></vl-style-stroke>
        </vl-style-circle>
      </vl-style-box>
    </vl-layer-vector>

    <vl-layer-vector :z-index="1" id="buffer">
      <vl-source-vector
        :features="coverageArea"
        projection="EPSG:4326"
      ></vl-source-vector>
      <vl-style-box>
        <vl-style-fill color="rgba(154, 154, 154, 0.4)"></vl-style-fill>
      </vl-style-box>
    </vl-layer-vector>
    <vl-interaction-select
      ident="selection"
      :features.sync="selectedFeatures"
      :layers="['stations']"
    >
      <vl-style-box>
        <vl-style-circle :radius="6">
          <vl-style-fill color="rgba(24, 177, 10, 1)"></vl-style-fill>
          <vl-style-stroke
            :width="6"
            color="rgb(223, 62, 62)"
          ></vl-style-stroke>
        </vl-style-circle>
      </vl-style-box>
    </vl-interaction-select>
  </vl-map>
  <!-- </div> -->
</template>

<script>
import buffer from "@turf/buffer";
import { mapState } from "vuex";

export default {
  name: "Map",

  data: () => ({
    zoom: 5,
    center: [7551864, 6063168],
    rotation: 0,
    mapCursor: "default"
    // stations: [],
    // coverageArea: []
    // selectedFeatures: [],
  }),
  computed: {
    ...mapState(["stations", "coverageArea"]),
    selectedFeatures: {
      get() {
        return this.$store.state.selectedFeatures;
      },
      set(features) {
        this.$store.commit("setSelectedFeatures", features);
      }
    }
  },
  beforeMount() {
    this.getStations();
  },
  methods: {
    async getStations() {
      const res = await fetch("/dsinfo.geojson");
      const data = await res.json();
      this.$store.commit("setStations", data.features);
      const buffered = buffer(data, 50, { units: "kilometers", steps: 72 });
      this.$store.commit("setCoverageArea", buffered.features);
    },
    // selectionFilter(feature, layer) {
    //   if (layer) {
    //     return layer.get("id") === "buffer" ? false : true;
    //   }
    //   return true;
    // },
    onMapPointerMove({ pixel }) {
      let hit = this.$refs.map.forEachFeatureAtPixel(pixel, () => true, {
        layerFilter: layer => layer.get("id") === "stations"
      });

      if (hit) {
        this.mapCursor = "pointer";
      } else {
        this.mapCursor = "default";
      }
    }
  }
};
</script>

<style lang="scss">
.vl-map {
  // height: 100%;
  position: fixed;
  .ol-control {
    padding: 0;
    border: none;
    background: none;
    &:hover {
      background: none;
    }
    button {
      display: block;
      margin-bottom: 0.2em;
      padding: 0;
      color: rgb(70, 70, 70);
      font-size: 1.2em;
      font-weight: 400;
      text-decoration: none;
      text-align: center;
      height: 1.5em;
      width: 1.5em;
      line-height: 0.4em;
      background-color: rgb(255, 255, 255);
      // color: rgb(223, 62, 62)
      border: none;
      box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
        0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

      &:hover {
        background-color: rgb(243, 243, 243);
      }
      &:focus {
        background-color: rgb(255, 255, 255);
        outline: none;
      }
    }
  }
  .ol-zoom {
    top: 0.5em;
    left: 0.5em;
    right: unset;
  }
}
</style>
