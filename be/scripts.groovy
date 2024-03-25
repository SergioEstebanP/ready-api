import org.apache.log4j.Logger
import groovy.json.*

log = Logger.getLogger("groovy.log")

def petsProperty = testRunner.testCase.testSuite.getPropertyValue( "pets" )


def slurper = new JsonSlurper();
def json = new groovy.json.JsonSlurper().parseText(petsProperty)

def petList = []

class PetModel {
	int id
	String name
	int times
	boolean found

	PetModel(id, name) {
		this.id = id
		this.name = name
		this.times = -1
		this.found = false
	}

	void setId(int id) {
 		this.id = id
	}
	
   	void setName(String name) {
      	this.name = name
   	}

   	void setTimes(int times) {
 		this.times = times
	}

	void setFound(boolean found) {
 		this.found = found
	}
	
  	int getId() {
      	return this.id
   	}
	
   	String getName() {
      	return this.name
   	}

   	int getTimes() {
      	return this.times
   	}

   	boolean getFound() {
      	return this.found
   	}
}

class Searcher{
	List pets
	List uniquePets


	Searcher(pets) {
		this.pets = pets
		this.uniquePets = []
	}

	def searchEqualNames() {
		for(i in this.pets){
			for(j in this.pets) {
				if (i.getName() == j.getName()) {
					i.setTimes(i.getTimes()+1)				
				}
			}
		}
		for(i in this.pets){
			if (i.getTimes() > 0) {
				i.setTimes(i.getTimes()+1)	
				this.uniquePets.add(i)	
			}
		}
	}

	List getUniquePets() {		
		return this.uniquePets
	}
}

for(i in json) {
	def item = new PetModel(i.id, i.name)
	petList.add(item)
}

log.info('========================= PART 1 =====================================')


for(pet in petList) {
	log.info('{' + pet.getId() + ',' + pet.getName() + '}')
}

log.info('========================== PART 2 ====================================')

def searcher = new Searcher(petList)
searcher.searchEqualNames()


List aux = searcher.getUniquePets().collect()

for(pet in searcher.getUniquePets()) {
	for(i=0; i<pet.getTimes()-1;i++) {
		for(j in aux) {
			if (j.getName() == pet.getName()) {
				j.setFound(true)
				break
			}
		}
	}
}

for(pet in aux) {
	if (pet.getFound() == true) {
		log.info('{' + pet.getName() + ',' + pet.getTimes() + '}')
	}
	
}
