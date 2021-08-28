<template>
  <div class="w-full bg-dark relative z-0">
    <div class="bg-light absolute top-0 h-32 w-full -z-1"></div>
    <!-- Newsletter content -->
    <div class="max-w-7xl mx-auto px-4 md:px-16 py-14 z-20">
      <div>
        <div class="bg-primary md:w-2/3 w-full rounded-lg mx-auto md:p-16 px-8 py-14 space-y-8">
          <div class="space-y-3">
            <div class="text-4xl font-extrabold text-light text-center">Be updated for upcoming designs</div>
            <div class="text-lg font-semibold text-primary-l-2 text-center">Etiam pulvinar elit orci, eget efficitur erat fermentum at.</div>
          </div>
          <form>
            <div class="flex md:gap-5 gap-3 flex-col md:flex-row justify-center align-center">
              <div class="md:w-7/12">
                <AppTextInput
                  large
                  type="email"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <AppButton type="submit" large background="dark">Subscribe</AppButton>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Newsletter'
}
</script>