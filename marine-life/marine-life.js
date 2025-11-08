export const categories = {
  pelagics: {
    id: 'pelagics',
    name: 'Pelagics & Megafauna',
    description: 'Large, open-ocean animals and migratory species',
    color: 'blue',
    children: {
      sharks: {
        id: 'sharks',
        name: 'Sharks',
        description: 'Apex predators and gentle giants of the ocean',
        color: 'blue-dark',
        children: {
          hammerhead: {
            id: 'hammerhead', name: 'Hammerhead Sharks', description: 'Sphyrna species, famous for their head shape', color: 'blue-light',
            image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=300&fit=crop' // accurate hammerhead shark
          },
          reef: {
            id: 'reef-shark', name: 'Reef Sharks', description: 'Grey, blacktip, whitetip, and Caribbean reef sharks', color: 'gray'
            , image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=300&fit=crop'
          },
          whale: {
            id: 'whale-shark', name: 'Whale Shark', description: 'The world’s largest fish, gentle filter-feeder', color: 'navy'
            , image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop'
          },
          thresher: {
            id: 'thresher-shark', name: 'Thresher Shark', description: 'Recognizable by their long tail', color: 'purple-dark'
            , image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?w=400&h=300&fit=crop'
          },
          greatWhite: {
            id: 'great-white', name: 'Great White Shark', description: 'The iconic apex predator', color: 'gray-dark'
            , image: 'https://images.unsplash.com/photo-1546026423-cc4642628d2b?w=400&h=300&fit=crop'
          },
          tiger: {
            id: 'tiger-shark', name: 'Tiger Shark', description: 'Large, striped, and powerful', color: 'olive'
            , image: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=400&h=300&fit=crop'
          },
          other: {
            id: 'other-sharks', name: 'Other Sharks', description: 'Other shark species', color: 'blue'
            , image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=400&h=300&fit=crop'
          }
        }
      },
      rays: {
        id: 'rays',
        name: 'Rays & Skates',
        description: 'Graceful cartilaginous fish with wing-like fins',
        color: 'purple',
        children: {
          manta: {
            id: 'manta-ray', name: 'Manta Rays', description: 'Giant, intelligent filter-feeders', color: 'purple-light'
            , image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=400&h=300&fit=crop'
          },
          eagle: {
            id: 'eagle-ray', name: 'Eagle Rays', description: 'Spotted, gliding rays', color: 'aqua'
            , image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?w=400&h=300&fit=crop'
          },
          stingray: {
            id: 'stingray', name: 'Stingrays', description: 'Bottom-dwelling rays with venomous tails', color: 'gray-light'
            , image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=300&fit=crop'
          },
          guitarfish: {
            id: 'guitarfish', name: 'Guitarfish', description: 'Ray-like fish with a guitar-shaped body', color: 'brown'
            , image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?w=400&h=300&fit=crop'
          },
          other: {
            id: 'other-rays', name: 'Other Rays', description: 'Other ray and skate species', color: 'purple-dark'
            , image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=400&h=300&fit=crop'
          }
        }
      },
      marineMammals: {
        id: 'marine-mammals',
        name: 'Marine Mammals',
        description: 'Whales, dolphins, seals, and dugongs',
        color: 'teal',
        children: {
          whales: {
            id: 'whales',
            name: 'Whales',
            description: 'Baleen and toothed whales, including humpbacks, blues, sperm whales',
            color: 'blue-light'
            , image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=300&fit=crop'
          },
          dolphins: {
            id: 'dolphins',
            name: 'Dolphins',
            description: 'Playful and intelligent marine mammals',
            color: 'aqua'
            , image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=400&h=300&fit=crop'
          },
          seals: {
            id: 'seals',
            name: 'Seals & Sea Lions',
            description: 'Pinnipeds: true seals, sea lions, and fur seals',
            color: 'gray'
            , image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?w=400&h=300&fit=crop'
          },
          dugongs: {
            id: 'dugongs',
            name: 'Dugongs & Manatees',
            description: 'Gentle herbivorous sirenians',
            color: 'green-light'
            , image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=400&h=300&fit=crop'
          }
        }
      },
      turtles: {
        id: 'turtles',
        name: 'Sea Turtles',
        description: 'Iconic marine reptiles',
        color: 'olive',
        children: {
          green: {
            id: 'green-turtle', name: 'Green Turtle', description: 'Herbivorous, common in tropics', color: 'olive-light'
            , image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=300&fit=crop'
          },
          hawksbill: {
            id: 'hawksbill-turtle', name: 'Hawksbill Turtle', description: 'Critically endangered, eats sponges', color: 'orange'
            , image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=400&h=300&fit=crop'
          },
          loggerhead: {
            id: 'loggerhead-turtle', name: 'Loggerhead Turtle', description: 'Large head, strong jaws', color: 'brown-light'
            , image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?w=400&h=300&fit=crop'
          },
          leatherback: {
            id: 'leatherback-turtle', name: 'Leatherback Turtle', description: 'Largest sea turtle, eats jellyfish', color: 'gray-dark'
            , image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=400&h=300&fit=crop'
          },
          other: {
            id: 'other-turtles', name: 'Other Turtles', description: 'Other sea turtle species', color: 'olive-dark'
            , image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop'
          }
        }
      },
      largeFish: {
        id: 'large-fish',
        name: 'Large Fish',
        description: 'Tuna, barracuda, trevally, groupers, etc.',
        color: 'orange',
        children: {
          tuna: {
            id: 'tuna', name: 'Tuna', description: 'Fast, powerful pelagic fish', color: 'blue'
            , image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=300&fit=crop'
          },
          barracuda: {
            id: 'barracuda', name: 'Barracuda', description: 'Long, predatory fish with sharp teeth', color: 'gray'
            , image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=400&h=300&fit=crop'
          },
          trevally: {
            id: 'trevally', name: 'Trevally', description: 'Strong, schooling jacks', color: 'silver'
            , image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?w=400&h=300&fit=crop'
          },
          grouper: {
            id: 'grouper', name: 'Groupers', description: 'Large, reef-associated predators', color: 'brown'
            , image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=400&h=300&fit=crop'
          },
          other: {
            id: 'other-large-fish', name: 'Other Large Fish', description: 'Other large pelagic or reef fish', color: 'orange-dark'
            , image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop'
          }
        }
      },
      eels: {
        id: 'eels',
        name: 'Eels',
        description: 'Morays and other large eels',
        color: 'brown',
        children: {
          moray: {
            id: 'moray-eel', name: 'Moray Eels', description: 'Common on reefs, often seen in holes', color: 'brown-dark'
            , image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=300&fit=crop'
          },
          conger: {
            id: 'conger-eel', name: 'Conger Eels', description: 'Large, deep-dwelling eels', color: 'gray-dark'
            , image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=400&h=300&fit=crop'
          },
          other: {
            id: 'other-eels', name: 'Other Eels', description: 'Other eel species', color: 'brown-light'
            , image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?w=400&h=300&fit=crop'
          }
        }
      }
    }
  },
  reef: {
    id: 'reef',
    name: 'Reef Life',
    description: 'Creatures and flora found on coral and rocky reefs',
    color: 'yellow',
    children: {
      reefFish: {
        id: 'reef-fish',
        name: 'Reef Fish',
        description: 'Colorful fish that live around coral reefs',
        color: 'yellow',
        children: {
          angelfish: {
            id: 'angelfish', name: 'Angelfish', description: 'Brightly colored, flat-bodied fish, often with trailing fins. Family Pomacanthidae.', color: 'yellow-light',
            image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=300&fit=crop'
          },
          butterflyfish: {
            id: 'butterflyfish', name: 'Butterflyfish', description: 'Small, patterned reef fish, often in pairs. Family Chaetodontidae.', color: 'yellow',
            image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?w=400&h=300&fit=crop'
          },
          parrotfish: {
            id: 'parrotfish', name: 'Parrotfish', description: 'Beaked fish, important for reef health, known for bright colors. Family Scaridae.', color: 'green',
            image: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=400&h=300&fit=crop'
          },
          wrasse: {
            id: 'wrasse', name: 'Wrasse', description: 'Diverse, often cleaning fish, elongated bodies. Family Labridae.', color: 'blue',
            image: 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=400&h=300&fit=crop'
          },
          damselfish: {
            id: 'damselfish', name: 'Damselfish', description: 'Small, territorial, often in anemones. Family Pomacentridae.', color: 'orange',
            image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=400&h=300&fit=crop'
          },
          clownfish: {
            id: 'clownfish', name: 'Clownfish', description: 'Iconic orange and white fish, symbiotic with anemones. Genus Amphiprion.', color: 'orange-light',
            image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=300&fit=crop'
          },
          surgeonfish: {
            id: 'surgeonfish', name: 'Surgeonfish & Tangs', description: 'Oval-shaped, often blue or yellow, with sharp tail spines. Family Acanthuridae.', color: 'blue-light',
            image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=400&h=300&fit=crop'
          },
          triggerfish: {
            id: 'triggerfish', name: 'Triggerfish', description: 'Tough, oval fish with strong jaws. Family Balistidae.', color: 'teal',
            image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?w=400&h=300&fit=crop'
          },
          filefish: {
            id: 'filefish', name: 'Filefish & Leatherjackets', description: 'Slender, rough-skinned relatives of triggerfish. Family Monacanthidae.', color: 'gray-light',
            image: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=400&h=300&fit=crop'
          },
          blenny: {
            id: 'blenny', name: 'Blennies', description: 'Small, bottom-dwelling fish with comical faces. Family Blenniidae.', color: 'brown-light',
            image: 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=400&h=300&fit=crop'
          },
          goby: {
            id: 'goby', name: 'Gobies', description: 'Tiny, often symbiotic with shrimp. Family Gobiidae.', color: 'yellow-dark',
            image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=300&fit=crop'
          },
          cardinalfish: {
            id: 'cardinalfish', name: 'Cardinalfish', description: 'Small, nocturnal, big-eyed fish. Family Apogonidae.', color: 'red-light',
            image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=400&h=300&fit=crop'
          },
          anthias: {
            id: 'anthias', name: 'Anthias', description: 'Small, colorful, schooling fish. Subfamily Anthiinae.', color: 'pink',
            image: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=400&h=300&fit=crop'
          },
          snapper: {
            id: 'snapper', name: 'Snappers', description: 'Medium to large, predatory, often in schools. Family Lutjanidae.', color: 'red',
            image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?w=400&h=300&fit=crop'
          },
          sweetlips: {
            id: 'sweetlips', name: 'Sweetlips', description: 'Large lips, bold patterns, often in groups. Genus Plectorhinchus.', color: 'yellow',
            image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=300&fit=crop'
          },
          basslet: {
            id: 'basslet', name: 'Basslets', description: 'Small, colorful, often in caves. Family Grammatidae.', color: 'purple',
            image: 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=400&h=300&fit=crop'
          },
          hawkfish: {
            id: 'hawkfish', name: 'Hawkfish', description: 'Perch on corals, have thick lips. Family Cirrhitidae.', color: 'red-dark',
            image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=300&fit=crop'
          },
          tilefish: {
            id: 'tilefish', name: 'Tilefish', description: 'Burrowers, often with colorful markings. Family Malacanthidae.', color: 'blue-dark',
            image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=400&h=300&fit=crop'
          },
          other: {
            id: 'other-reef-fish', name: 'Other Reef Fish', description: 'Other reef-associated fish', color: 'yellow-dark',
            image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=400&h=300&fit=crop'
          }
        }
      },
      corals: {
        id: 'corals',
        name: 'Corals',
        description: 'Living reef builders and their ecosystems',
        color: 'red',
        children: {
          hard: {
            id: 'hard-coral', name: 'Hard Corals', description: 'Stony, reef-building corals', color: 'red-dark'
            , image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?w=400&h=300&fit=crop'
          },
          soft: {
            id: 'soft-coral', name: 'Soft Corals', description: 'Flexible, colorful corals', color: 'pink'
            , image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=300&fit=crop'
          },
          fire: {
            id: 'fire-coral', name: 'Fire Coral', description: 'Stinging, yellow-green coral', color: 'yellow'
            , image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=400&h=300&fit=crop'
          },
          black: {
            id: 'black-coral', name: 'Black Coral', description: 'Deep water, tree-like corals', color: 'black'
            , image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=400&h=300&fit=crop'
          },
          other: {
            id: 'other-corals', name: 'Other Corals', description: 'Other coral types', color: 'red-light'
            , image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop'
          }
        }
      },
      invertebrates: {
        id: 'invertebrates',
        name: 'Invertebrates',
        description: 'Spineless wonders: sea stars, urchins, cucumbers',
        color: 'teal',
        children: {
          starfish: {
            id: 'starfish', name: 'Sea Stars', description: 'Star-shaped echinoderms', color: 'orange-light'
            , image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=300&fit=crop'
          },
          urchin: {
            id: 'urchin', name: 'Sea Urchins', description: 'Spiny, round invertebrates', color: 'purple'
            , image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=400&h=300&fit=crop'
          },
          cucumber: {
            id: 'sea-cucumber', name: 'Sea Cucumbers', description: 'Soft-bodied, bottom-dwellers', color: 'brown-light'
            , image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?w=400&h=300&fit=crop'
          },
          anemone: {
            id: 'anemone', name: 'Anemones', description: 'Colorful, stinging polyps', color: 'red'
            , image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=400&h=300&fit=crop'
          },
          jellyfish: {
            id: 'jellyfish', name: 'Jellyfish', description: 'Gelatinous, drifting animals', color: 'blue-light'
            , image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop'
          },
          other: {
            id: 'other-inverts', name: 'Other Invertebrates', description: 'Other invertebrate types', color: 'teal-light'
            , image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=300&fit=crop'
          }
        }
      },
      crustaceans: {
        id: 'crustaceans',
        name: 'Crustaceans',
        description: 'Crabs, lobsters, shrimp',
        color: 'amber',
        children: {
          crab: {
            id: 'crab', name: 'Crabs', description: 'Common reef and sand dwellers', color: 'red'
            , image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=400&h=300&fit=crop'
          },
          lobster: {
            id: 'lobster', name: 'Lobsters', description: 'Nocturnal, spiny or clawed', color: 'orange-dark'
            , image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?w=400&h=300&fit=crop'
          },
          shrimp: {
            id: 'shrimp', name: 'Shrimp', description: 'Cleaner, pistol, and mantis shrimp', color: 'pink'
            , image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=400&h=300&fit=crop'
          },
          squat: {
            id: 'squat-lobster', name: 'Squat Lobsters', description: 'Small, colorful crustaceans', color: 'purple-light'
            , image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop'
          },
          other: {
            id: 'other-crustaceans', name: 'Other Crustaceans', description: 'Other crustacean types', color: 'amber-light'
            , image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=300&fit=crop'
          }
        }
      },
      cephalopods: {
        id: 'cephalopods',
        name: 'Cephalopods',
        description: 'Octopus, squid, cuttlefish',
        color: 'violet',
        children: {
          octopus: {
            id: 'octopus', name: 'Octopus', description: 'Intelligent, camouflaged mollusks', color: 'violet-dark'
            , image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=400&h=300&fit=crop'
          },
          squid: {
            id: 'squid', name: 'Squid', description: 'Fast, schooling cephalopods', color: 'blue'
            , image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=400&h=300&fit=crop'
          },
          cuttlefish: {
            id: 'cuttlefish', name: 'Cuttlefish', description: 'Masters of color change', color: 'green'
            , image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?w=400&h=300&fit=crop'
          },
          other: {
            id: 'other-cephalopods', name: 'Other Cephalopods', description: 'Other cephalopod types', color: 'violet-light'
            , image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop'
          }
        }
      },
      nudibranchs: {
        id: 'nudibranchs',
        name: 'Nudibranchs',
        description: 'Colorful sea slugs, macro favorites',
        color: 'pink',
        children: {
          dorid: {
            id: 'dorid-nudibranch', name: 'Dorid Nudibranchs', description: 'Classic, round-bodied nudibranchs', color: 'pink-dark'
            , image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=300&fit=crop'
          },
          aeolid: {
            id: 'aeolid-nudibranch', name: 'Aeolid Nudibranchs', description: 'Cerata-covered, often bright', color: 'pink-light'
            , image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=400&h=300&fit=crop'
          },
          other: {
            id: 'other-nudibranchs', name: 'Other Nudibranchs', description: 'Other nudibranch types', color: 'pink'
            , image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?w=400&h=300&fit=crop'
          }
        }
      },
      seahorses: {
        id: 'seahorses',
        name: 'Seahorses & Pipefish',
        description: 'Syngnathids, beloved by macro photographers',
        color: 'magenta',
        children: {
          seahorse: {
            id: 'seahorse', name: 'Seahorses', description: 'Iconic, upright-swimming fish', color: 'magenta-dark'
            , image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=400&h=300&fit=crop'
          },
          pipefish: {
            id: 'pipefish', name: 'Pipefish', description: 'Elongated, camouflaged relatives', color: 'magenta-light'
            , image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=400&h=300&fit=crop'
          },
          ghostPipefish: {
            id: 'ghost-pipefish', name: 'Ghost Pipefish', description: 'Masters of disguise', color: 'gray-light'
            , image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=300&fit=crop'
          },
          other: {
            id: 'other-syngnathids', name: 'Other Syngnathids', description: 'Other seahorse/pipefish types', color: 'magenta'
            , image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?w=400&h=300&fit=crop'
          }
        }
      }
    }
  },
  flora: {
    id: 'flora',
    name: 'Marine Flora',
    description: 'Plants and plant-like organisms in the sea',
    color: 'green',
    children: {
      seagrass: {
        id: 'seagrass',
        name: 'Seagrass',
        description: 'Flowering plants forming underwater meadows',
        color: 'green-light'
      },
      kelp: {
        id: 'kelp',
        name: 'Kelp & Seaweed',
        description: 'Large brown algae, kelp forests',
        color: 'olive-dark'
      },
      algae: {
        id: 'algae',
        name: 'Algae',
        description: 'Green, red, and brown algae',
        color: 'lime'
      },
      sponges: {
        id: 'sponges',
        name: 'Sponges',
        description: 'Porifera, filter-feeding animals',
        color: 'beige'
      }
    }
  },
  macro: {
    id: 'macro',
    name: 'Macro Life',
    description: 'Small, photogenic creatures',
    color: 'pink',
    children: {
      macroCrustaceans: {
        id: 'macro-crustaceans',
        name: 'Macro Crustaceans',
        description: 'Shrimp, crabs, squat lobsters',
        color: 'amber-light'
      },
      macroMollusks: {
        id: 'macro-mollusks',
        name: 'Macro Mollusks',
        description: 'Tiny snails, bivalves, and more',
        color: 'peach'
      },
      flatworms: {
        id: 'flatworms',
        name: 'Flatworms',
        description: 'Colorful, ribbon-like worms',
        color: 'purple-light'
      }
    }
  }
};

export const species = {
  // Sharks
  'whale-shark': {
    id: 'whale-shark',
    name: 'Whale Shark',
    scientificName: 'Rhincodon typus',
    commonNames: ['Gentle Giant', 'World\'s Largest Fish'],
    description: 'The largest fish in the ocean, known for their docile nature and filter-feeding habits',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop',
    category: 'sharks',
    rarity: 'uncommon',
    size: 'giant',
    depth: { min: 0, max: 40 },
    bestMonths: [6, 7, 8, 9, 10, 11],
    bestRegions: ['philippines', 'maldives', 'indonesia', 'mexico', 'australia'],
    behavior: ['filter-feeding', 'surface-swimming', 'gentle', 'migratory'],
    diet: ['plankton', 'krill', 'small fish'],
    habitatPreferences: ['open ocean', 'coral reefs', 'aggregation sites'],
    photographyTips: [
      'Approach slowly and calmly',
      'Stay parallel to avoid startling',
      'Use wide-angle lens',
      'Natural light works best'
    ]
  },

  'hammerhead': {
    id: 'hammerhead',
    name: 'Hammerhead Shark',
    scientificName: 'Sphyrna spp.',
    description: 'Distinctive sharks with hammer-shaped heads, often seen in large schools',
    image: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=400&h=300&fit=crop',
    category: 'sharks',
    rarity: 'uncommon',
    size: 'large',
    depth: { min: 15, max: 80 },
    bestMonths: [3, 4, 5, 6, 7, 8],
    bestRegions: ['galapagos', 'cocos-island', 'malpelo', 'red-sea'],
    behavior: ['schooling', 'cleaning stations', 'early morning activity'],
    diet: ['rays', 'small sharks', 'fish'],
    habitatPreferences: ['seamounts', 'walls', 'current-rich areas'],
    photographyTips: [
      'Early morning dives best',
      'Stay calm at cleaning stations',
      'Shoot up towards surface',
      'Respect their space'
    ]
  },

  'great-white': {
    id: 'great-white',
    name: 'Great White Shark',
    scientificName: 'Carcharodon carcharias',
    description: 'The apex predator that needs no introduction',
    image: 'https://images.unsplash.com/photo-1546026423-cc4642628d2b?w=400&h=300&fit=crop',
    category: 'sharks',
    rarity: 'rare',
    size: 'giant',
    depth: { min: 5, max: 250 },
    bestMonths: [4, 5, 6, 7, 8, 9],
    bestRegions: ['south-africa', 'australia', 'california', 'mexico'],
    behavior: ['apex predator', 'curious', 'territorial'],
    diet: ['seals', 'sea lions', 'large fish'],
    habitatPreferences: ['seal colonies', 'kelp forests', 'open ocean'],
    photographyTips: [
      'Cage diving recommended',
      'Steady movements',
      'Natural behavior shots',
      'Respect safety protocols'
    ]
  },

  'reef-shark': {
    id: 'reef-shark',
    name: 'Reef Shark',
    scientificName: 'Carcharhinus spp.',
    commonNames: ['Grey Reef Shark', 'Caribbean Reef Shark', 'Blacktip Reef Shark'],
    description: 'Common reef-dwelling sharks, often curious about divers',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop',
    category: 'sharks',
    rarity: 'common',
    size: 'medium',
    depth: { min: 5, max: 60 },
    bestMonths: [1, 2, 3, 4, 5, 10, 11, 12],
    bestRegions: ['caribbean', 'red-sea', 'indian-ocean', 'south-pacific'],
    behavior: ['curious', 'territorial', 'patrol routes'],
    diet: ['reef fish', 'squid', 'crustaceans'],
    habitatPreferences: ['coral reefs', 'drop-offs', 'channels'],
    photographyTips: [
      'Calm, confident behavior',
      'Shoot at their level',
      'Include reef environment',
      'Use natural light'
    ]
  },

  'thresher-shark': {
    id: 'thresher-shark',
    name: 'Thresher Shark',
    scientificName: 'Alopias vulpinus',
    description: 'Recognizable by their extremely long tail fins used for hunting',
    image: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=400&h=300&fit=crop',
    category: 'sharks',
    rarity: 'rare',
    size: 'large',
    depth: { min: 20, max: 120 },
    bestMonths: [3, 4, 5, 6],
    bestRegions: ['philippines', 'egypt'],
    behavior: ['early morning activity', 'cleaning stations', 'deep water'],
    diet: ['schooling fish', 'squid'],
    habitatPreferences: ['seamounts', 'cleaning stations', 'deep reefs'],
    photographyTips: [
      'Very early morning dives',
      'Stay at cleaning stations',
      'Minimize movements',
      'Use strobes carefully'
    ]
  },

  // Rays
  'manta-ray': {
    id: 'manta-ray',
    name: 'Manta Ray',
    scientificName: 'Mobula birostris',
    commonNames: ['Giant Manta', 'Oceanic Manta'],
    description: 'Majestic giants known for their intelligence and graceful swimming',
    image: 'https://images.unsplash.com/photo-1546026423-cc4642628d2b?w=400&h=300&fit=crop',
    category: 'rays',
    rarity: 'uncommon',
    size: 'giant',
    depth: { min: 5, max: 40 },
    bestMonths: [2, 3, 4, 5, 9, 10, 11],
    bestRegions: ['maldives', 'indonesia', 'mexico', 'hawaii', 'ecuador'],
    behavior: ['filter-feeding', 'cleaning stations', 'surface feeding', 'intelligent'],
    diet: ['plankton', 'small fish'],
    habitatPreferences: ['cleaning stations', 'channels', 'upwelling areas'],
    photographyTips: [
      'Approach from the side',
      'Stay below their flight path',
      'Use wide-angle lens',
      'Capture cleaning behavior'
    ]
  },

  'eagle-ray': {
    id: 'eagle-ray',
    name: 'Eagle Ray',
    scientificName: 'Aetobatus narinari',
    description: 'Spotted rays that glide gracefully through the water',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop',
    category: 'rays',
    rarity: 'common',
    size: 'large',
    depth: { min: 5, max: 50 },
    bestMonths: [1, 2, 3, 4, 10, 11, 12],
    bestRegions: ['red-sea', 'caribbean', 'indian-ocean', 'galapagos'],
    behavior: ['schooling', 'gliding', 'foraging in sand'],
    diet: ['mollusks', 'crustaceans', 'worms'],
    habitatPreferences: ['sandy areas', 'coral reefs', 'lagoons'],
    photographyTips: [
      'Anticipate their gliding path',
      'Capture formation flying',
      'Include reef background',
      'Use burst mode'
    ]
  },

  'stingray': {
    id: 'stingray',
    name: 'Stingray',
    scientificName: 'Dasyatis spp.',
    description: 'Bottom-dwelling rays often buried in sand',
    image: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=400&h=300&fit=crop',
    category: 'rays',
    rarity: 'common',
    size: 'medium',
    depth: { min: 1, max: 30 },
    bestMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    bestRegions: ['caribbean', 'pacific', 'indian-ocean', 'red-sea'],
    behavior: ['bottom-dwelling', 'sand-burying', 'docile'],
    diet: ['mollusks', 'crustaceans', 'worms'],
    habitatPreferences: ['sandy bottoms', 'shallow lagoons', 'coral reefs'],
    photographyTips: [
      'Watch for eyes protruding from sand',
      'Gentle approach from front',
      'Capture feeding behavior',
      'Use macro for eye details'
    ]
  },

  // Marine Mammals
  'whale': {
    id: 'whale',
    name: 'Whales',
    scientificName: 'Cetacea',
    commonNames: ['Humpback Whale', 'Blue Whale', 'Sperm Whale'],
    description: 'The largest animals on Earth, occasionally encountered by divers',
    image: 'https://images.unsplash.com/photo-1546026423-cc4642628d2b?w=400&h=300&fit=crop',
    category: 'marine-mammals',
    rarity: 'rare',
    size: 'giant',
    depth: { min: 0, max: 200 },
    bestMonths: [6, 7, 8, 9, 10],
    bestRegions: ['norway', 'azores', 'tonga', 'dominican-republic'],
    behavior: ['migratory', 'breaching', 'singing', 'social'],
    diet: ['krill', 'small fish', 'squid'],
    habitatPreferences: ['open ocean', 'migration routes', 'feeding areas'],
    photographyTips: [
      'Respectful distance required',
      'Capture scale with divers',
      'Listen for whale songs',
      'Follow local regulations'
    ]
  },

  'dolphin': {
    id: 'dolphin',
    name: 'Dolphins',
    scientificName: 'Delphinidae',
    description: 'Intelligent and playful marine mammals',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop',
    category: 'marine-mammals',
    rarity: 'common',
    size: 'medium',
    depth: { min: 0, max: 100 },
    bestMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    bestRegions: ['red-sea', 'caribbean', 'mediterranean', 'south-pacific'],
    behavior: ['playful', 'curious', 'intelligent', 'pod swimming'],
    diet: ['fish', 'squid'],
    habitatPreferences: ['open water', 'coastal areas', 'coral reefs'],
    photographyTips: [
      'Let them approach you',
      'Capture interactions',
      'Use natural light',
      'Show pod behavior'
    ]
  },

  // Macro Life
  'nudibranch': {
    id: 'nudibranch',
    name: 'Nudibranchs',
    scientificName: 'Nudibranchia',
    commonNames: ['Sea Slugs'],
    description: 'Tiny, colorful sea slugs that are macro photographers\' favorites',
    image: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=400&h=300&fit=crop',
    category: 'macro-life',
    rarity: 'common',
    size: 'tiny',
    depth: { min: 1, max: 40 },
    bestMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    bestRegions: ['indonesia', 'philippines', 'mediterranean', 'california'],
    behavior: ['slow-moving', 'feeding', 'mating displays'],
    diet: ['sponges', 'hydroids', 'algae'],
    habitatPreferences: ['coral reefs', 'rocky reefs', 'kelp forests'],
    photographyTips: [
      'Use macro lens with 1:1 ratio',
      'Multiple strobes for even lighting',
      'Focus on the rhinophores',
      'Be patient - they move slowly'
    ]
  },

  'seahorse': {
    id: 'seahorse',
    name: 'Seahorse',
    scientificName: 'Hippocampus spp.',
    description: 'Unique fish that swim upright and males carry the babies',
    image: 'https://images.unsplash.com/photo-1546026423-cc4642628d2b?w=400&h=300&fit=crop',
    category: 'macro-life',
    rarity: 'uncommon',
    size: 'small',
    depth: { min: 2, max: 30 },
    bestMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    bestRegions: ['philippines', 'indonesia', 'mediterranean', 'caribbean'],
    behavior: ['camouflaged', 'stationary', 'tail-grasping'],
    diet: ['tiny crustaceans', 'plankton'],
    habitatPreferences: ['seagrass beds', 'coral reefs', 'soft corals'],
    photographyTips: [
      'Use 60mm or 105mm macro lens',
      'Focus on the eyes',
      'Capture courtship dances',
      'Show camouflage abilities'
    ]
  },

  'frogfish': {
    id: 'frogfish',
    name: 'Frogfish',
    scientificName: 'Antennariidae',
    description: 'Masters of camouflage with lightning-fast strikes',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop',
    category: 'macro-life',
    rarity: 'uncommon',
    size: 'small',
    depth: { min: 5, max: 50 },
    bestMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    bestRegions: ['indonesia', 'philippines', 'caribbean', 'red-sea'],
    behavior: ['ambush predator', 'camouflaged', 'lure fishing'],
    diet: ['small fish', 'crustaceans'],
    habitatPreferences: ['coral reefs', 'sponges', 'artificial reefs'],
    photographyTips: [
      'Look for the lure (illicium)',
      'Capture the yawn behavior',
      'Show incredible camouflage',
      'Use snoot for dramatic lighting'
    ]
  },

  'octopus': {
    id: 'octopus',
    name: 'Octopus',
    scientificName: 'Octopoda',
    description: 'Highly intelligent cephalopods with amazing camouflage abilities',
    image: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=400&h=300&fit=crop',
    category: 'macro-life',
    rarity: 'common',
    size: 'medium',
    depth: { min: 1, max: 60 },
    bestMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    bestRegions: ['mediterranean', 'caribbean', 'indonesia', 'california'],
    behavior: ['intelligent', 'camouflaged', 'den-dwelling', 'color-changing'],
    diet: ['crustaceans', 'mollusks', 'fish'],
    habitatPreferences: ['rocky reefs', 'coral reefs', 'caves'],
    photographyTips: [
      'Capture color changes',
      'Show intelligence in eyes',
      'Den behavior interesting',
      'Use red light to avoid startling'
    ]
  },

  // Reptiles
  'sea-turtle': {
    id: 'sea-turtle',
    name: 'Sea Turtles',
    scientificName: 'Cheloniidae',
    commonNames: ['Green Turtle', 'Hawksbill', 'Loggerhead'],
    description: 'Ancient mariners that have roamed the oceans for millions of years',
    image: 'https://images.unsplash.com/photo-1546026423-cc4642628d2b?w=400&h=300&fit=crop',
    category: 'reptiles',
    rarity: 'common',
    size: 'large',
    depth: { min: 1, max: 50 },
    bestMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    bestRegions: ['caribbean', 'red-sea', 'great-barrier-reef', 'galapagos'],
    behavior: ['grazing', 'cleaning stations', 'nesting migrations'],
    diet: ['seagrass', 'algae', 'sponges', 'jellyfish'],
    habitatPreferences: ['coral reefs', 'seagrass beds', 'coastal waters'],
    photographyTips: [
      'Approach slowly from the side',
      'Capture cleaning behavior',
      'Include natural environment',
      'Respect nesting areas'
    ]
  }
  ,
  'kelp-forests': {
    id: 'kelp-forests',
    name: 'Kelp Forests',
    scientificName: 'Order Laminariales',
    commonNames: ['Kelp Forests', 'Giant Kelp'],
    description: 'Underwater forests formed by large brown algae (kelp), providing habitat for countless marine species. Kelp forests are among the most productive and dynamic ecosystems on Earth, found in cold, nutrient-rich waters.',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=300&fit=crop',
    category: 'kelp',
    rarity: 'common',
    size: 'giant',
    depth: { min: 2, max: 40 },
    bestMonths: [5, 6, 7, 8, 9, 10],
    bestRegions: ['california', 'south-africa', 'australia', 'chile', 'alaska'],
    behavior: ['habitat-forming', 'photosynthetic'],
    diet: [],
    habitatPreferences: ['rocky reefs', 'cold water', 'nutrient-rich upwelling zones'],
    photographyTips: [
      'Use wide-angle lens for forest perspective',
      'Look for sunbeams filtering through kelp',
      'Capture marine life among fronds',
      'Mind surge and entanglement risk'
    ]
  }
}
