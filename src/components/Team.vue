<template>
  <div id="team" class="w-full">
    <div class="max-w-7xl mx-auto px-4 md:px-16 py-14">
      <div class="flex flex-col space-y-8">
        <div class="w-full md:w-8/12 space-y-2 mx-auto">
          <div class="text-4xl md:text-5xl font-black text-center">Meet the team</div>
          <div class="text-lg font-semibold text-dark-l-6 text-center">Morbi sit amet sollicitudin arcu condimentum, nisi vitae aliquam sagittis, lorem lorem.</div>
        </div>
        <div class="w-full md:w-8/12 mx-auto">
          <div class="flex flex-wrap flex-shrink justify-center gap-2 md:gap-5">
            <AppTabButton
              chip
              v-for="(department,key) in departments"
              :key="key"
              :active="activeDept===department.name"
              @click="activeDept = department.name===activeDept ? '' : department.name"
              :icon="department.icon"
            >
              {{department.name}}
            </AppTabButton>
          </div>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-16">
          <div
            v-for="character in characters"
            :key="character.id"
            :class="[character.id===activeId ? 'h-full row-span-2' : 'md:h-60 h-40']"
            @click="activeId = character.id===activeId ? null : character.id"
          >
            <AppImageCard
              :file="character.file"
              :name="character.name"
              :role="character.role"
              :active="character.id===activeId"
              :focus="activeDept===character.department"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Team',

  data: () => ({
    activeDept: '',
    departments: [
      { name: 'Design', icon: 'brush' },
      { name: 'Marketing', icon: 'bullhorn' },
      { name: 'Development', icon: 'desktop' }
    ],
    activeId: null,
    characters: [
      { id: 1, name: 'Alex Sanders', department: 'Design', role: 'Web Designer', file: 'alex.png' },
      { id: 2, name: 'Ian Dominguez', department: 'Development', role: 'Backend Developer', file: 'ian.png' },
      { id: 3, name: 'Eliza Howell', department: 'Design', role: 'UX Designer', file: 'eliza.png' },
      { id: 4, name: 'Alison Cobb', department: 'Development', role: 'Frontend Developer', file: 'alison.png' },
      { id: 5, name: 'Minnie Brown', department: 'Development', role: 'iOS Developer', file: 'minnie.png' },
      { id: 6, name: 'Gabby Hoffman', department: 'Marketing', role: 'Marketing Analyst', file: 'gabby.png' },
      { id: 7, name: 'Ryan Hernandez', department: 'Marketing', role: 'Market Researcher', file: 'ryan.png' },
      { id: 8, name: 'Tiffany Chang', department: 'Design', role: 'Product Designer', file: 'tiffany.png' },
      { id: 9, name: 'Noah Garcia', department: 'Design', role: 'iOS Designer', file: 'noah.png' },
      { id: 10, name: 'Mischa Ford', department: 'Design', role: 'Graphic Designer', file: 'mischa.png' },
      { id: 11, name: 'Andy Simpson', department: 'Marketing', role: 'Marketing Manager', file: 'andy.png' },
      { id: 12, name: 'Josef Morgan', department: 'Design', role: 'Android Designer', file: 'josef.png' }
    ]
  })
}
</script>