import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnimeRowComponent } from './anime-row.component';

describe('AnimeRowComponent', () => {
  let component: AnimeRowComponent;
  let fixture: ComponentFixture<AnimeRowComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimeRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

