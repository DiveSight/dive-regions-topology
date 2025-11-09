
# DIVESIGHT - Diving regions, Marine Life and Phenomena Topology

**Live Demo:** [https://divesight.github.io/dive-regions-topology/](https://divesight.github.io/dive-topology/)

![Dive Region Topology Viewer Screenshot](screenshot.png)

## Goals

1) **Formalize Dive Regions**. Formally define dive regions so that we can associate individual dives with a parent region. In this way you can ask questions like "What dives are in Indonesia" or even "What dives are in Gili Air". Effectively we want to capture a topology from the top down - such as 'Southeast Asia' being a parent to 'Indonesia' being a parent to 'Bali'.

2) **Formalize Marine life**. To have a formal agreement on what the kinds of life are and the naming of that life.

3) **Formalize Marine Phenomena**. Formally define interesting phenomena; drift diving, blackwater, wrecks... [TBD]

Defining regions is a challenging issue. Divers have a colloqiual understanding of regions around the world. There doesn't yet seem to be a single canonical formal consensus on what the areas of the world are. Every dive site seems to have different ways of partitioning the world. We want to capture different partitioning schemes but be able to present a single representation on demand. We feel the best way to deal with different ways of looking at the world is to try to break our scheme down into granular sub-units that can be composed into different types of larger collections.

Categorizing marine life is also challenging. It does mean dealing with both **scientific taxonomy** and **experiential perception**. Traditional biological classification (domain, kingdom, phylum, class, order, family, genus, species) captures the evolutionary relationships among organisms and allows for precision, but it’s not always intuitive. Divers tend to think in terms of *encounter categories*: sharks, macro life, reef fish, corals, pelagics. Humans in general tend to use voluntary or folk classification rather than formal directed acyclic graphs (Lakoff). These colloquial groupings cut across scientific boundaries, mixing taxa that share ecological roles, behaviors, or visual appeal. Convergent evolution functional roles in ecosystem or trophic niches can belie genetic ancestry. Effectively genetic history is in some ways a less useful mapping than ecosystem niche (see https://www.amazon.com/Origin-Nature-Life-Earth-Emergence/dp/1009633775 ). Our approach is therefore to start with a structured taxonomy and then create a concept of **functional groups** that map better to colloquial understanding. A diver doesn’t need to know that manta rays and hammerhead sharks are both in *Chondrichthyes* - what matters is that they’re both large, charismatic, pelagic animals likely to be seen in blue water. A nudibranch and a cuttlefish may share a habitat and may pose for the camera, but they come from entirely different phyla (*Mollusca* and *Cephalopoda* respectively).

The way we are building this is by pure vibranium - we are using modern llms to conversationally generate data on demand, and then regression testing it against a separate collection of several thousand dives. This work is largely colloqial and highly labor intensive process. Hopefully it will benefit the dive community and possibly become a convention.

This project is licensed under the [MIT License](LICENSE). Use at your own risk. Please feel free to contribute by creating pull requests. You can also join our discord at: https://discord.gg/TFBHQsJVFC .

## TODO

- unsplash images need work!
- perhaps include scripts to help with de-duping and so on

## What is a good list of dive regions?

This is our current proposal - there is some argument this could be more granular:

```
* Africa
  - East Africa & WIO (Somalia→Mozambique, Madagascar/Comoros/Mayotte, Seychelles, Mascarenes)
* Arctic
* Antarctica
* Australia
* Caribbean
* East Asia (Japan/Okinawa, Taiwan, Korea, China coast)
* Europe
  - Europe – Atlantic & Northern Seas (Iceland, UK/IE, Biscay, North & Norwegian Seas, Baltic ok to include)
  - Macaronesia (Azores, Madeira, Canary Islands, Cape Verde)
  - Mediterranean
* Indian Ocean
* Middle East
  - Red Sea
  - Arabian/Persian Gulf
  - Bay of Bengal
* New Zealand
* North America
  - North America – Pacific (Alaska→Baja)
  - North America – Atlantic (Canada/US East)
  - Mexico
* South America
  - South America – Pacific (Peru/Chile)
  - South America – Atlantic (Venezuela→Argentina)
  - Tropical Eastern Pacific (Mexico→Colombia, Galápagos)
* South Pacific
  - Melanesia (Fiji, Vanuatu, New Caledonia, PNG/Solomons portions outside CT)
  - Polynesia (French Polynesia, Samoa/American Samoa, Tonga, Cook, Niue, Tokelau, Pitcairn, Hawaii, Easter)
  - Micronesia (Palau, FSM, Marshalls, Nauru, Guam/CMI, Kiribati Line/Phoenix as you prefer)
* Southeast Asia (non-CT: Thailand, Cambodia, Vietnam, Peninsular MY, Singapore)
  - Coral Triangle (ID/PH/MY-Borneo/TL/PNG/SI)
```

## Region Types

Dive areas are sorted into a four-level hierarchy:

- **major**: The broadest regions, often spanning continents or ocean basins (e.g., "Southeast Asia", "Caribbean", "Indian Ocean").
- **country**: A nation or large territory within a major region (e.g., "Indonesia", "Egypt", "Australia").
- **area**: A well-known region within a country, often a province, island, or large marine area (e.g., "Bali", "Florida", "Red Sea").
- **subarea**: A specific dive destination, city, island, or site cluster within an area (e.g., "Tulamben", "Key Largo", "Blue Heron Bridge").

## Nominatim

There are several ways to correlate an individual dive with a region. One way is to have shapefiles of every country on earth and try to find a point-in-polygon or point-near-polygon. But this turns out to be surprisingly poor.

Projects such as Nominatim from Open Street Maps have a formal hierarchical region named boundary system that can help also (see https://nominatim.org/). Here is an example of the USAT Liberty Tulamben dive region data:

```
    "region": {
      "country": "Indonesia",
      "country_code": "ID",
      "state": "Bali",
      "county": "Karangasem",
      "display_name": "Karangasem, Bali, Nusa Tenggara, Indonesia"
    }
```

The benefit is that Nominatim is able to produce a region code for most latitude and longitudes supplied to it - even if a point is not _in_ a country - but merely _near_ a country. There are some inconveniences in that the data is not always english, and the region properties are not always fully fleshed out.
