import { ICurriculum } from './../interfaces/ICurriculum'
export const mock: ICurriculum = {
  name: 'luiz felipe torres farias (mock)',
  items: [
    {
      name: 'objetivos',
      description: "Trabalhar com desenvolvimento de microsserviços utilizando Java com Spring Boot, ou mobile com Java, Kotlin e/ou Flutter/Dart em uma empresa que possua plano de carreira e incentive o crescimento profissional de seus colaboradores."
    },
    {
      name: 'perfil',
      description: "Sou uma pessoa analítica, focada  e apaixonada por inovação! Gosto de estar sempre antenado sobre assuntos relacionados a tecnologia e buscar conhecimentos que me possibilitem expandir minhas áreas de conhecimento. Gosto de desafios e de resolver problemas."
    },
    {
      name: 'aptidões',
      subItem: [
        {
          name: "Java",
          description: "Spring boot, maven"
        },
        {
          name: "Kotlin",
          description: "Desenvolvimento de aplicações Android"
        },
        {
          name: "AWS",
          description: "Cloud Pratictioner "
        }
      ]
    },
    {
      name: "experiências",
      subItem: [
        {
          name: "Atento",
          description: "Analista BI",
        }
      ]
    }
  ]
}
