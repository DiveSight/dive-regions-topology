
# WORLD WIDE DIVE REGIONS

![Dive Region Topology Viewer Screenshot](screenshot.png)

**Live Demo:** [https://divesight.github.io/dive-regions-topology/](https://divesight.github.io/dive-regions-topology/)

This project is licensed under the [MIT License](LICENSE).

## Region Type Hierarchy

This project organizes dive locations into a four-level hierarchy, reflecting how divers commonly discuss and explore the world:

- **major**: The broadest regions, often spanning continents or ocean basins (e.g., "Southeast Asia", "Caribbean", "Indian Ocean").
- **country**: A nation or large territory within a major region (e.g., "Indonesia", "Egypt", "Australia").
- **area**: A well-known region within a country, often a province, island, or large marine area (e.g., "Bali", "Florida", "Red Sea").
- **subarea**: A specific dive destination, city, island, or site cluster within an area (e.g., "Tulamben", "Key Largo", "Blue Heron Bridge").

This structure allows for both a global overview and detailed drill-down, supporting both formal and colloquial diver perspectives.


This is an attempt to formally define a hierarchy of dive regions around the world - from a colloquial diver perspective. We want to capture a topology from the top down - such as 'Southeast Asia' being a parent to 'Indonesia' being a parent to 'Bali'.

Every dive site seems to have different ways of partitioning the world, and we want to capture different partitioning schems but be able to present a single representation on demand.


## Nominatim

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

The value of leveraging Nominatim this is that it could help us identify which major region a dive belongs to - such as "South east Asia". There's a tension between colloquial diver concepts here and the formal region definitions however. The Nominatim data is fairly broken however, not always english, regions are missing, inconsistent and incomplete.
