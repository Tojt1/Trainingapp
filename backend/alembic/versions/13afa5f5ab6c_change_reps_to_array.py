"""change reps to array

Revision ID: 13afa5f5ab6c
Revises: 0ab8d54d4ccb
Create Date: 2026-10-30 13:32:40.061302

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import postgresql

revision = '13afa5f5ab6c'
down_revision = '0ab8d54d4ccb'
branch_labels = None
depends_on = None


def upgrade() -> None:
    op.alter_column(
        'workoutplan_exercise',
        'reps',
        existing_type=sa.Integer(),
        type_=postgresql.ARRAY(sa.Integer()),
        existing_nullable=True,
        postgresql_using='ARRAY[reps]'
    )


def downgrade() -> None:
    op.alter_column(
        'workoutplan_exercise',
        'reps',
        existing_type=postgresql.ARRAY(sa.Integer()),
        type_=sa.Integer(),
        existing_nullable=True,
        postgresql_using='reps[1]'
    )