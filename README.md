> Ontwerp en maak een interactieve website die snel laadt en prettig te gebruiken is.
De instructie vind je in: [INSTRUCTIONS.md](https://github.com/fdnd-task/enhanced-website/blob/main/docs/INSTRUCTIONS.md)

# Milledoni
Een website om cadeau-ideeën op te doen.

## Inhoudsopgave

  * [Beschrijving](#beschrijving)
  * [Gebruik](#gebruik)
  * [Kenmerken](#kenmerken)
  * [Installatie](#installatie)
  * [Licentie](#licentie)

## Beschrijving
<!-- Bij Beschrijving staat kort beschreven wat voor project het is en wat je hebt gemaakt -->
<!-- Voeg een mooie poster visual toe 📸 -->
<!-- Voeg een link toe naar je live site 🌐-->
Check [hier](https://user-experience-enhanced-website-1v6i.onrender.com/) de website.

<img width="500" height="1083" alt="image" src="https://github.com/user-attachments/assets/c333ad9e-5f96-42f3-a896-230198ce445e" />

## Gebruik
<!-- Bij Gebruik staat de user story, hoe het werkt en wat je er mee kan. -->
User story: Als gebruiker wil ik cadeaus kunnen toevoegen aan mijn verlanglijstje, zodat ik mijn cadeaus kan bewaren en later makkelijk terugvinden.

Je kan met de button op elk cadeautje het cadeau toevoegen aan je verlanglijstje.
<img width="1908" height="874" alt="Group 689" src="https://github.com/user-attachments/assets/1b66f751-ef70-4f42-99ff-573384401423" />

## Kenmerken
<!-- Bij Kenmerken staat welke technieken zijn gebruikt en hoe. Wat is de HTML structuur? Wat zijn de belangrijkste dingen in CSS? Wat is er met JS gedaan en hoe? Misschien heb je iets met NodeJS gedaan, of heb je een framwork of library gebruikt? -->
### User experience
Hieronder is de post interactie te zien met een loading state en success state.
https://github.com/user-attachments/assets/897087fc-5bfd-4e4e-89ac-3b79f77efe96

De pagina herlaadt nu niet meer als je een cadeau opslaat. Dit is gedaan met client side scripting.

### Frontend performance
Door de performance audit is duidelijk geworden dat de grote content (afbeeldingen) de website vertraagt. Dit heb ik opgelost met responsive images op deze manier:
```liquid
{% if product.img != null %}
  <picture>
    <source
      srcset="https://fdnd-agency.directus.app/assets/{{ product.img.id }}?format=avif"
      type="image/avif"
    >
    <source
      srcset="https://fdnd-agency.directus.app/assets/{{ product.img.id }}?format=webp"
      type="image/webp"
    >
    <img
      class="product-image"
      src="https://fdnd-agency.directus.app/assets/{{ product.img.id }}?format=jpg"
      alt="{{ product.name }}"
      width="{{ product.img.width }}"
      height="{{ product.img.height }}"
    >
  </picture>
{% else %}
  <img class="product-image" src="{{ product.image }}" alt="product image" width="422" height="422">
{% endif %}
```
## Installatie
<!-- Bij Installatie staat hoe een andere developer aan jouw repo kan werken -->
Clone de repository.
Gebruik `npm start` in de console om de website op te starten.

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).
