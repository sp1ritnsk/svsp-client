<template>
  <v-app>
    <!--    about_organization_section-->
    <section>
      <h1 style="font-size: 4em;" class="text-center mb-1">Об организации</h1>
      <p style="font-size: 1.2em;" class="text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut
        mauris sapien. Pellentesque habitant morbi tristique senectus et netus
        et malesuada fames ac turpis egestas. Vivamus nisi nulla, iaculis eu
        pretium ac, vehicula faucibus neque. Etiam augue velit, malesuada sed
        congue non, vulputate vitae sem. Phasellus id lobortis ipsum, eget
        rhoncus metus. Fusce fermentum at erat et ultricies. Suspendisse mollis
        neque at luctus lacinia. Quisque bibendum vulputate nulla, non rutrum
        nisi pharetra in. In rhoncus, purus ut lobortis cursus, libero eros
        posuere nisi, nec auctor eros lectus ac massa. Sed suscipit libero orci,
        vel gravida urna dictum vitae. Fusce ultricies faucibus risus, id
        bibendum tellus faucibus vitae. Ut semper fermentum orci, in dapibus
        nibh consectetur ut. Integer volutpat lacus sit amet mattis cursus.
        Etiam condimentum rutrum elit vitae molestie.
      </p>
      <h1 style="font-size: 4em;" class="text-center mb-1">О сети</h1>
      <p style="font-size: 1.2em;" class="text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut
        mauris sapien. Pellentesque habitant morbi tristique senectus et netus
        et malesuada fames ac turpis egestas. Vivamus nisi nulla, iaculis eu
        pretium ac, vehicula faucibus neque. Etiam augue velit, malesuada sed
        congue non, vulputate vitae sem. Phasellus id lobortis ipsum, eget
        rhoncus metus. Fusce fermentum at erat et ultricies. Suspendisse mollis
        neque at luctus lacinia. Quisque bibendum vulputate nulla, non rutrum
        nisi pharetra in. In rhoncus, purus ut lobortis cursus, libero eros
        posuere nisi, nec auctor eros lectus ac massa. Sed suscipit libero orci,
        vel gravida urna dictum vitae. Fusce ultricies faucibus risus, id
        bibendum tellus faucibus vitae. Ut semper fermentum orci, in dapibus
        nibh consectetur ut. Integer volutpat lacus sit amet mattis cursus.
        Etiam condimentum rutrum elit vitae molestie.
      </p>
      <h1 style="font-size: 4em;" class="text-center mb-1">История</h1>
      <p style="font-size: 1.2em;" class="text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut
        mauris sapien. Pellentesque habitant morbi tristique senectus et netus
        et malesuada fames ac turpis egestas. Vivamus nisi nulla, iaculis eu
        pretium ac, vehicula faucibus neque. Etiam augue velit, malesuada sed
        congue non, vulputate vitae sem. Phasellus id lobortis ipsum, eget
        rhoncus metus. Fusce fermentum at erat et ultricies. Suspendisse mollis
        neque at luctus lacinia. Quisque bibendum vulputate nulla, non rutrum
        nisi pharetra in. In rhoncus, purus ut lobortis cursus, libero eros
        posuere nisi, nec auctor eros lectus ac massa. Sed suscipit libero orci,
        vel gravida urna dictum vitae. Fusce ultricies faucibus risus, id
        bibendum tellus faucibus vitae. Ut semper fermentum orci, in dapibus
        nibh consectetur ut. Integer volutpat lacus sit amet mattis cursus.
        Etiam condimentum rutrum elit vitae molestie.
      </p>
      <!--      contacts_section-->
      <section>
        <h1 style="font-size: 4em;" class="text-center mb-1">Контакты</h1>
        <vl-map
          :load-tiles-while-animating="true"
          :load-tiles-while-interacting="true"
          style="height: 400px; width: 600px; margin-bottom: 80px; margin-left: 60px"
        >
          <vl-view
            :zoom.sync="zoom"
            :center.sync="center"
            :rotation.sync="rotation"
          ></vl-view>

          <vl-layer-tile id="osm">
            <vl-source-osm></vl-source-osm>
          </vl-layer-tile>
        </vl-map>
      </section>
    </section>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      zoom: 2,
      center: [0, 0],
      rotation: 0
    };
  }
};
</script>
