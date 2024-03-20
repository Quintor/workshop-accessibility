# Formulier

## Niet Toegankelijk

1. Het gebrek aan duidelijk contrast tussen de achtergrond- en tekstkleuren maakt het moeilijk om te lezen.
2. De `<html>` tag bevat geen `lang` attribuut.
3. Binnen de `<head>` ontbreekt een `<title>` element.
4. Het document mist structurele elementen zoals `<main>` en `<section>.`
5. `<input>` tags missen bijbehorende `<label>` elementen voor toegankelijkheid, en passende types zoals `type="text"` of `type="password"` ontbreken.
6. Er zijn geen duidelijke instructies voor het invullen van het formulier, en er is geen feedback voor foutieve invoer.
7. De verzendknop geeft niet aan wanneer het aan het verwerken/laden is, en het type ervan is niet gespecificeerd.

## Toegankelijk

1. Verbeter het kleurcontrast tussen de achtergrond en de tekst om de leesbaarheid te verbeteren.
2. Voeg het `lang` attribuut toe zoals volgt: `<html lang="nl">`.
3. Zorg ervoor dat er een `<title>` aanwezig is binnen de `<head>` sectie.
4. Stel een duidelijke structuur vast door gebruik te maken van de elementen `<main>`, `<fieldset>`, en `<legend>`.
5. Koppel een `<label>` aan elke invoer en specificeer het juiste type.
6. Geef duidelijke instructies door `required` toe te voegen aan invoervelden, `aria-invalid` en `aria-errormessage` te gebruiken voor foutafhandeling, en `aria-describedby` te benutten om instructies te geven.
7. Verbeter de gebruikerservaring tijdens het indienen door `aria-busy` en `aria-label` toe te voegen om doorlopende verwerking aan te geven, en specificeer `type="submit"` voor de verzendknop.