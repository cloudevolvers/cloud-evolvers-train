import type { BlogPost } from '../types';

export const vmEphemeralOsDiskCachingPost: BlogPost = {
  id: 'vm-ephemeral-os-disk-caching',
  title: {
    en: 'Ephemeral OS Disk Caching: Faster Boots and Better Resilience for Azure VMs',
    nl: 'Ephemeral OS Disk Caching: snellere boots en betere resilience voor Azure VMs'
  },
  description: {
    en: 'Azure VMs and Scale Sets can now cache the full OS disk on local storage instead of relying on remote storage reads. The result: faster boot, lower latency, and resilience against remote storage incidents.',
    nl: 'Azure VMs en Scale Sets kunnen nu de volledige OS-disk op local storage cachen in plaats van te leunen op remote storage reads. Resultaat: snellere boot, lagere latency en resilience tegen remote storage-incidenten.'
  },
  date: '2026-04-02',
  author: 'Yair Knijn',
  tags: ['Azure', 'Virtual Machines', 'Scale Sets', 'Performance', 'Resilience'],
  image: '/images/pexels/pexels-modern-server-room.jpg',
  excerpt: {
    en: 'Most teams running Scale Sets have a story about a remote storage hiccup that took down a fleet at 2 AM. Ephemeral OS disk caching is Microsoft\'s answer to that whole class of incident.',
    nl: 'De meeste teams die Scale Sets draaien hebben een verhaal over een remote storage-hapering die om 2 uur \'s nachts een fleet onderuit haalde. Ephemeral OS disk caching is Microsofts antwoord op die hele klasse incidenten.'
  },
  category: {
    en: 'Cloud Infrastructure',
    nl: 'Cloud Infrastructuur'
  },
  readTime: 7,
  content: {
    introduction: {
      en: 'Microsoft introduced ephemeral OS disk caching for Virtual Machines and Virtual Machine Scale Sets in April 2026. The feature caches the full OS disk on the local SSD attached to the VM host, so reads do not need to traverse the remote storage path during normal operation. The two payoffs: noticeably lower boot latency, and a real degree of resilience against remote storage incidents that have historically taken whole fleets offline.',
      nl: 'Microsoft introduceerde ephemeral OS disk caching voor Virtual Machines en Virtual Machine Scale Sets in april 2026. De feature cachet de volledige OS-disk op de local SSD die aan de VM-host hangt, zodat reads tijdens normale operatie niet via het remote storage-pad hoeven. De twee voordelen: merkbaar lagere boot-latency, en een echte mate van resilience tegen remote storage-incidenten die historisch hele fleets offline hebben gehaald.'
    },
    sections: [
      {
        title: {
          en: 'How this is different from regular ephemeral OS disks',
          nl: 'Hoe verschilt dit van gewone ephemeral OS-disks'
        },
        content: {
          en: 'Regular ephemeral OS disks have existed for years and store the OS disk entirely on local storage — but you give up persistence: a stop-deallocate loses the disk. Ephemeral OS disk caching is the opposite tradeoff: the OS disk lives on managed storage as normal (so it persists across stop-deallocate), but a complete cached copy sits on the local SSD for low-latency reads. Writes go through to the managed disk for durability. You get persistence and local-disk performance without picking one.',
          nl: 'Reguliere ephemeral OS-disks bestaan al jaren en slaan de OS-disk volledig op local storage — maar je verliest persistentie: een stop-deallocate verliest de disk. Ephemeral OS disk caching is de tegenovergestelde tradeoff: de OS-disk leeft normaal op managed storage (dus blijft bewaard over stop-deallocate), maar een complete gecachete kopie zit op de local SSD voor reads met lage latency. Writes gaan door naar de managed disk voor duurzaamheid. Je krijgt persistentie én local-disk-performance zonder te kiezen.'
        }
      },
      {
        title: {
          en: 'Why this matters for Scale Sets at scale',
          nl: 'Waarom dit telt voor Scale Sets op schaal'
        },
        content: {
          en: 'When you scale out a Scale Set by 100 nodes during a traffic spike, every new VM has to read its OS disk from remote storage to boot. If the storage path is healthy, this is fine but slow. If the storage path is degraded — and it occasionally is — your scale-out gets slow or fails partway. With ephemeral OS disk caching, the cached copy means the boot path can complete even during transient remote-storage hiccups. For autoscaling fleets serving customer traffic, that is a meaningful failure mode that goes away.',
          nl: 'Wanneer je een Scale Set met 100 nodes uitschaalt tijdens een traffic-spike, moet elke nieuwe VM zijn OS-disk uit remote storage lezen om te booten. Is het storage-pad gezond, dan is dat prima maar langzaam. Is het storage-pad gedegradeerd — en dat is het soms — dan wordt je scale-out langzaam of mislukt halverwege. Met ephemeral OS disk caching zorgt de gecachete kopie ervoor dat het boot-pad kan voltooien zelfs tijdens tijdelijke remote-storage-haperingen. Voor autoscaling fleets die klantverkeer bedienen verdwijnt daar een betekenisvolle failure-mode.'
        },
        code: {
          language: 'bicep',
          code: `// Enable ephemeral OS disk caching on a VMSS
resource vmss 'Microsoft.Compute/virtualMachineScaleSets@2026-01-01' = {
  name: 'app-vmss-prod'
  location: location
  sku: { name: 'Standard_D8s_v5', capacity: 3, tier: 'Standard' }
  properties: {
    virtualMachineProfile: {
      storageProfile: {
        osDisk: {
          createOption: 'FromImage'
          caching: 'ReadOnly'
          managedDisk: {
            storageAccountType: 'Premium_LRS'
          }
          // The new bit: cache the full OS disk on local storage
          ephemeralOsDiskCaching: {
            enabled: true
            placement: 'CacheDisk'
          }
        }
      }
    }
  }
}`
        }
      },
      {
        title: {
          en: 'When it makes sense (and when it does not)',
          nl: 'Wanneer het zinnig is (en wanneer niet)'
        },
        content: {
          en: 'Turn it on for: stateless web tiers, API workers, container hosts, batch compute — anywhere the OS disk is mostly read after boot and the workload benefits from faster scale-out. Skip it for: VMs with heavy OS-disk write activity (databases, message brokers writing to local OS-disk paths), VMs with very small OS disks where the caching overhead is not worth it, and SKUs where local SSD capacity is constrained. Microsoft has a sizing matrix in the docs — read it before turning the feature on for your specific SKU choice.',
          nl: 'Zet het aan voor: stateless web-tiers, API-workers, container hosts, batch compute — overal waar de OS-disk vooral wordt gelezen na boot en de workload baat heeft bij sneller uitschalen. Sla het over voor: VMs met zware OS-disk write-activiteit (databases, message brokers die naar local OS-disk-paden schrijven), VMs met heel kleine OS-disks waar de caching-overhead niet de moeite waard is, en SKUs waar de local SSD-capaciteit beperkt is. Microsoft heeft een sizing-matrix in de docs — lees die voordat je de feature aanzet voor jouw specifieke SKU-keuze.'
        }
      },
      {
        title: {
          en: 'Cost: roughly free',
          nl: 'Kosten: ongeveer gratis'
        },
        content: {
          en: 'There is no separate charge for ephemeral OS disk caching — the local SSD on the VM host was already part of the SKU price. You are using capacity that was sitting idle. The only cost story to think about is whether the workload\'s actual local-disk usage (temp files, paging, log staging) leaves enough headroom for the cached OS disk. For typical SKUs this is comfortable; for compute-optimized SKUs with smaller local SSDs, check the sizing matrix.',
          nl: 'Er is geen aparte rekening voor ephemeral OS disk caching — de local SSD op de VM-host zat al in de SKU-prijs. Je gebruikt capaciteit die idle stond. Het enige kostenverhaal om over na te denken is of het werkelijke local-disk-gebruik van de workload (temp-bestanden, paging, log staging) genoeg ruimte overlaat voor de gecachete OS-disk. Voor typische SKUs is dat ruim voldoende; voor compute-optimized SKUs met kleinere local SSDs, check de sizing-matrix.'
        }
      }
    ],
    conclusion: {
      en: 'Ephemeral OS disk caching is a quiet, free quality-of-life improvement for the right workloads — and a real resilience win for autoscaling fleets that have been bitten by remote storage incidents. Enable it on stateless workloads first, monitor scale-out latency for a couple of weeks, and make a call about wider rollout from there. For most teams it is an easy yes.',
      nl: 'Ephemeral OS disk caching is een rustige, gratis quality-of-life-verbetering voor de juiste workloads — en een echte resilience-winst voor autoscaling fleets die door remote storage-incidenten zijn geraakt. Zet het eerst aan op stateless workloads, monitor scale-out-latency een paar weken, en beslis vanaf daar over bredere uitrol. Voor de meeste teams is het een makkelijke ja.'
    }
  }
};
