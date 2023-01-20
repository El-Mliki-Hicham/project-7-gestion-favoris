<?php

abstract class Person {  
 public $Nom;
 public $Prenom;
 
  public function Presentation(){
    return 'is person ';
 }
}
 interface IGestionPerson   {
    
     public function Ajouter($data);
     public function Supprimer($data);
}
 class GestionPerson implements IGestionPerson  {
    public $compteur = 0;
     public function Ajouter($data)
    {
        $this->compteur++;
    }
     public function Supprimer($data){
        $this->compteur--;
     }
}
class Formateur extends Person {
    public function Presentation(){
      return 'is formateur';

    }  
    
}
class Stagiaire  extends Person {
    public function Presentation(){
        return 'is stagiare';
      }    
}

// programme test
$formateur = new Formateur();
$stagiaire = new Stagiaire;
$stagiaire->Nom= 'chami';
$stagiaire->Prenom= 'mouad';

$gestion = new GestionPerson;

$gestion->Ajouter($formateur);
$gestion->Ajouter($stagiaire);
$gestion->Ajouter($stagiaire);

echo $gestion->compteur ."<br>";//echo :
$gestion2 = new GestionPerson;
$gestion2->Ajouter($formateur);
$gestion2->Ajouter($stagiaire);

echo $gestion2->compteur."<br>";//output : 
echo $formateur->Presentation() ."<br>" ;// is formateur
echo $stagiaire->Presentation();// is stagiare
?>